import LazyLoad from 'vanilla-lazyload';

const lazyLoadOptions = {};

const createLazyLoadInstance = () => {
	return new LazyLoad(lazyLoadOptions);
};

export {createLazyLoadInstance};
