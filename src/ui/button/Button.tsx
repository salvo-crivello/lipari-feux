import React from 'react';
import { TButton } from './Button.types';
import clsx from 'clsx';
import { motion } from 'motion/react';
import buttonVariants from './button.styles';
import { isBlankOrEmpty, isNotNullOrUndefined } from '../../logic/utils/commonUtils';

function Button({ className, variant, size, text, icon: Icon, iconPos = 'left', ...props }: TButton) {
	const onlyIcon = isBlankOrEmpty(text) && isNotNullOrUndefined(Icon);

	return (
		<motion.button className={clsx(buttonVariants({ variant, size, onlyIcon }), className)} {...props}>
			{Icon && iconPos === 'left' && <Icon className={clsx('shrink-0', { 'mr-2': text })} size={'1.5em'} />}
			{text}
			{Icon && iconPos === 'right' && <Icon className={clsx('shrink-0', { 'ml-2': text })} size={'1.5em'} />}
		</motion.button>
	);
}

export default Button;
