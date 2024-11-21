import React from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, Field } from 'react-hook-form'
import { FormFildType } from './forms/PatientForm'
import Image from 'next/image'

interface CustomProps {
    control: Control<any>,
    fieldType: FormFildType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (Field: any) => React.ReactNode,
}

const RenderField = ({ field, props }: { field: any, props: CustomProps }) => {
    const { fieldType, iconAlt, iconSrc, placeholder } = props;
    switch (fieldType) {
        case FormFildType.INPUT:
            return (
                <div className='flex rounded-md border border-dark-500 bg-dark-400'>
                    {
                        iconSrc && (
                            <Image
                                src={iconSrc}
                                height={24}
                                width={24}
                                alt={iconAlt || 'icon'}
                                className='ml-2' />
                        )
                    }
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            className='shad-input border-0' />
                    </FormControl>
                </div>
            )
    }
}

const CustomFormField = (props: CustomProps) => {

    const { control, fieldType, name, label } = props;
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='flex-1'>
                    {fieldType !== FormFildType.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )}

                    <RenderField field={field} props={props} />
                    <FormMessage className='shad-error' />
                </FormItem>
            )}
        />
    )
}

export default CustomFormField