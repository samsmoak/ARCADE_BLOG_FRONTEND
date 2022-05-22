import React from "react";

function wavesvg() {
	return (
		<div>
			<svg
				id='visual'
				viewBox='0 0 900 600'
				width='900'
				height='600'
				xmlns='http://www.w3.org/2000/svg'
				xmlns:xlink='http://www.w3.org/1999/xlink'
				version='1.1'
			>
				<rect x='0' y='0' width='900' height='600' fill='#002233'></rect>
				<path
					d='M0 423L21.5 415.3C43 407.7 86 392.3 128.8 386.5C171.7 380.7 214.3 384.3 257.2 397.5C300 410.7 343 433.3 385.8 442.2C428.7 451 471.3 446 514.2 451.8C557 457.7 600 474.3 642.8 465.2C685.7 456 728.3 421 771.2 407.7C814 394.3 857 402.7 878.5 406.8L900 411L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z'
					fill='#0066FF'
					stroke-linecap='round'
					stroke-linejoin='miter'
				></path>
			</svg>
		</div>
	);
}

export default wavesvg;
