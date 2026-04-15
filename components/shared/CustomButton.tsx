import { Pressable, PressableProps, Text } from 'react-native';

interface CustomButtonProps extends PressableProps {
  children?: string;
  color?: 'primary' | 'secondary' | 'tertiary'
  variant?: 'contained' | 'text-only'
}

const CustomButton = ({
  children,
  color='primary',
  variant='contained',
  className,
  ...props
}: CustomButtonProps) => {

  const buttonColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color];

  const buttonTextColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
  }[color];

  const buttonVariant = {
    contained: '',
    'text-only': `bg-transparent`,
  }[variant];

  return (
    <Pressable
      className={`${buttonColor} ${buttonVariant} p-3 rounded-md active:opacity-80 ${className}`}
      {...props}
    >
      <Text 
        className={`${buttonVariant ? buttonTextColor : 'text-white'} text-center text-lg font-bold`}
      >
        {children}
        </Text>
    </Pressable>
  )
}

export default CustomButton