export const mod = (val: number, base: number) => (base + (val % base)) % base;

export const constrain = (num: number, min: number, max: number) =>
	min * +(num < min) + max * +(num > max) + num * +(num <= max && num >= min);

export const asTitle = (title: string) => title.replace(/_/g, ' ');

export const onLoad = ({ target }: Event) => {
	(<HTMLElement>target).style.opacity = '1';
};

export const For = (fn: () => void, num: number) => {
	for (let i = 0; i < num; i++) fn();
};

export namespace DOM {
	type qFunc = <T = HTMLElement>(s: string) => T;
	const { getElementById: preId, querySelector: preQuery } = document;
	export const Id = <qFunc>preId.bind(document);
	export const query = <qFunc>preQuery.bind(document);
	export const BODY = query<HTMLBodyElement>('body');
	export const lockScroll = () => (BODY.style.overflowY = 'hidden');
	export const allowScroll = () => (BODY.style.overflowY = 'auto');
}
