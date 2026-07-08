/*
 * Copyright (C) 2016-2026 Yuriy Yarosh
 * All rights reserved.
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const Flag = ({
	locale,
	className = "",
}: {
	locale: string;
	className?: string;
}) => {
	const flags: Record<string, React.ReactNode> = {
		en: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>United Kingdom</title>
				<path fill="#012169" d="M0 0h640v480H0z" />
				<path
					fill="#FFF"
					d="M75 0l244 181L563 0h77v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
				/>
				<path
					fill="#C8102E"
					d="M424 281l216 159v40L409 281h15zm-92 12l3 2-1-1L331 0h-2l-1 2 2 2h-2l3 1zm-200-24l-7-5v2L81 0h2l49 37 1-1zm336-252l-5-4v2L563 0h2l3-2zM81 480l7 5v-2L81 480zm242-180l-2 3 2 2h-2l-3-1h2l-2-2 1-1zm-3 4l-3-2v2l3 2zm336-247l-7 5v-2L563 49zM81 431l7-5v2l-7 5z"
				/>
				<path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
				<path fill="#C8102E" d="M273 0v480h96V0H273zM0 192v96h640v-96H0z" />
			</svg>
		),
		de: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>Germany</title>
				<path fill="#000" d="M0 320h640v160H0z" />
				<path fill="#D00" d="M0 160h640v160H0z" />
				<path fill="#FFCE00" d="M0 0h640v160H0z" />
			</svg>
		),
		fr: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>France</title>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path fill="#fff" d="M0 0h640v480H0z" />
					<path fill="#00267f" d="M0 0h213.3v480H0z" />
					<path fill="#f31830" d="M426.7 0H640v480H426.7z" />
				</g>
			</svg>
		),
		it: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>Italy</title>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path fill="#fff" d="M0 0h640v480H0z" />
					<path fill="#009246" d="M0 0h213.3v480H0z" />
					<path fill="#ce2b37" d="M426.7 0H640v480H426.7z" />
				</g>
			</svg>
		),
		es: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>Spain</title>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path fill="#aa151b" d="M0 0h640v480H0z" />
					<path fill="#f1bf00" d="M0 120h640v240H0z" />
				</g>
			</svg>
		),
		pt: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>Portugal</title>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path fill="#ff0000" d="M426.7 0H640v480H426.7z" />
					<path fill="#006600" d="M0 0h213.3v480H0z" />
				</g>
			</svg>
		),
		pl: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>Poland</title>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path fill="#fff" d="M0 0h640v240H0z" />
					<path fill="#dc143c" d="M0 240h640v240H0z" />
				</g>
			</svg>
		),
		uk: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>Ukraine</title>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path fill="#0057b8" d="M0 0h640v480H0z" />
					<path fill="#ffd700" d="M0 240h640v240H0z" />
				</g>
			</svg>
		),
		sv: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>Sweden</title>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path fill="#006aa7" d="M0 0h640v480H0z" />
					<path fill="#fecc00" d="M175 0h88v480h-88z" />
					<path fill="#fecc00" d="M0 196h640v88H0z" />
				</g>
			</svg>
		),
		no: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>Norway</title>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path fill="#ed2939" d="M0 0h640v480H0z" />
					<path fill="#fff" d="M0 196h640v88H0z" />
					<path fill="#fff" d="M175 0h88v480h-88z" />
					<path fill="#002664" d="M0 220h640v40H0z" />
					<path fill="#002664" d="M199 0h40v480h-40z" />
				</g>
			</svg>
		),
		et: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>Estonia</title>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path fill="#fff" d="M0 0h640v160H0z" />
					<path fill="#000" d="M0 160h640v160H0z" />
					<path fill="#4a9cd6" d="M0 320h640v160H0z" />
				</g>
			</svg>
		),
		lv: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>Latvia</title>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path fill="#9e3039" d="M0 0h640v192H0z" />
					<path fill="#fff" d="M0 192h640v96H0z" />
					<path fill="#9e3039" d="M0 288h640v192H0z" />
				</g>
			</svg>
		),
		lt: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>Lithuania</title>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path fill="#007308" d="M0 0h640v320H0z" />
					<path fill="#b00000" d="M0 320h640v160H0z" />
					<path fill="#ffb300" d="M0 0h640v160H0z" />
				</g>
			</svg>
		),
		fi: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>Finland</title>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path fill="#fff" d="M0 0h640v480H0z" />
					<path fill="#0032a0" d="M0 174h640v132H0z" />
					<path fill="#0032a0" d="M174 0h132v480h-132z" />
				</g>
			</svg>
		),
		cz: (
			<svg viewBox="0 0 640 480" className={className}>
				<title>Czech Republic</title>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path fill="#fff" d="M0 0h640v240H0z" />
					<path fill="#d7141a" d="M0 240h640v240H0z" />
					<path fill="#11457e" d="M0 0h320v240H0z" />
				</g>
			</svg>
		),
	};

	return flags[locale] || null;
};
