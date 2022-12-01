import React, { useState } from 'react'
import SideItem from './SideItem'
import Slider from './Slider'

const DEFAULT_OPTIONS = [
    {
        name: 'Brightness',
        property: 'brightness',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Contrast',
        property: 'contrast',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Saturation',
        property: 'saturate',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Grayscale',
        property: 'grayscale',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Sepia',
        property: 'sepia',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Hue Rotate',
        property: 'hue-rotate',
        value: 0,
        range: {
            min: 0,
            max: 360
        },
        unit: 'deg'
    },
    {
        name: 'Blur',
        property: 'blur',
        value: 0,
        range: {
            min: 0,
            max: 20
        },
        unit: 'px'
    }
]

export default function App()
{
    const [optionIndex, setOptionIndex] = useState(0)
    const [options, setOptions] = useState(DEFAULT_OPTIONS)
    const selectedOption = options[optionIndex]

    function handleSliderChange({ target })
    {
        setOptions(prev =>
        {
            return prev.map((option, index) =>
            {
                if (index !== optionIndex) return option
                return {...option, value: target.value}
            })
        })
    }
    
    function getFilters()
    {
        const filters = options.map(option =>
        {
            return `${option.property}(${option.value}${option.unit})`
        })
        return {filter: filters.join(' ')}
    }

    return (
        <div className='container'>
            <div className='img-container' style={getFilters()} />
            <div className='side-container'>
                {
                    options.map((option, index) =>
                    {
                        return (
                            <SideItem
                                handleClick={() => setOptionIndex(index)}
                                key={index}
                                name={option.name}
                                active={index === optionIndex}
                            />
                        )
                    })
                }
            </div>
            <Slider
                min={selectedOption.range.min}
                max={selectedOption.range.max}
                value={selectedOption.value}
                handleChange={handleSliderChange}
            />
        </div>
    )
}