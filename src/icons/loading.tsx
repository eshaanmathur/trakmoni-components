import * as React from 'react';

function _Loading(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 20 20"
			fill="none"
			{...props}
		>
			<path
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM6 10a4 4 0 108 0 4 4 0 00-8 0z"
				fill="currentColor"
				fillOpacity={0.2}
			/>
			<path
				d="M10 18a8 8 0 01-7.608-5.528l3.804-1.236A4 4 0 0010 14v4z"
				fill="currentColor"
			/>
		</svg>
	);
}

const LoadingIcon = React.memo(_Loading);
export default LoadingIcon;
