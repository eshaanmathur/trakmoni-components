import React from 'react';

import LoadingIcon from '../icons/loading';
import { classNames } from '../utils/styles';

enum ButtonColorScheme {
	Accent = 'accent',
	Gray = 'gray',
	Alarm = 'alarm',
}

const variants = {
	solid: {
		[ButtonColorScheme.Accent]:
			'border-accent-700 bg-accent-700 hover:bg-accent-600 text-accent-100 focus:ring-accent-700 dark:border-accent-900 dark:bg-accent-900 dark:text-white dark:focus:ring-accent-200',
		[ButtonColorScheme.Gray]:
			'border-gray-700 bg-gray-700 hover:bg-gray-600 text-gray-100 focus:ring-gray-700 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:focus:ring-gray-200',
		[ButtonColorScheme.Alarm]:
			'border-alarm-700 bg-alarm-700 hover:bg-alarm-600  text-alarm-100 focus:ring-alarm-700 dark:border-alarm-900 dark:bg-alarm-900 dark:text-white dark:focus:ring-alarm-200',
	},
	outline: {
		[ButtonColorScheme.Accent]:
			'border-current bg-transparent text-accent-700 focus:ring-current dark:border-current dark:text-accent-400 hover:text-accent-600',
		[ButtonColorScheme.Gray]:
			'border-current bg-transparent text-gray-700 focus:ring-current dark:border-current dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-600',
		[ButtonColorScheme.Alarm]:
			'border-current bg-transparent text-alarm-700 focus:ring-current dark:border-current dark:text-alarm-400 hover:text-alarm-600',
	},
	text: {
		[ButtonColorScheme.Accent]:
			'border-transparent bg-transparent text-accent-700 focus:ring-current dark:text-accent-200 hover:text-accent-600',
		[ButtonColorScheme.Gray]:
			'border-transparent bg-transparent text-gary-700 focus:ring-current dark:text-gray-200 hover:text-gray-600',
		[ButtonColorScheme.Alarm]:
			'border-transparent bg-transparent text-alarm-700 focus:ring-current dark:text-alarm-200 hover:text-alarm-600',
	},
};

export const sizes = {
	small: 'rounded p-[6px] gap-1',
	large: 'rounded-xl p-[14px] gap-2',
};

type ButtonProps = {
	icon?: React.MemoExoticComponent<(props: React.SVGProps<SVGSVGElement>) => JSX.Element>;
	iconPosition?: 'left' | 'right';

	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	variant?: keyof typeof variants;
	size?: keyof typeof sizes;
	colorScheme?: ButtonColorScheme;
	disabled?: boolean;
	loading?: boolean;
	loadingText?: string;
};

function Button(props: ButtonProps) {
	const {
		children,
		icon,
		iconPosition = 'left',
		type = 'button',
		onClick,
		size = 'large',
		variant = 'solid',
		colorScheme = ButtonColorScheme.Accent,
		disabled,
		loading = false,
		loadingText = 'Loading...',
	} = props;
	const Icon = loading ? LoadingIcon : icon;

	return (
		<button
			type={type}
			onClick={onClick}
			className={`flex w-full items-center justify-center ${sizes[size]} border-[2px] ${variants[variant][colorScheme]} focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-70`}
			disabled={disabled ?? loading}
		>
			{iconPosition === 'left' && Icon && <Icon className={classNames('h-5 w-5', loading && 'animate-spin')} />}
			<span className="font-bold leading-none">{loading ? loadingText : children}</span>
			{iconPosition === 'right' && Icon && <Icon className={classNames('h-5 w-5', loading && 'animate-spin')} />}
		</button>
	);
}

export default Button;
