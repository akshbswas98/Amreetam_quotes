import React from "react";
import { useOverrides, StackItem } from "@quarkly/components";
const defaultProps = {
	"width": "50%",
	"md-width": "100%"
};
const overrides = {};

const Roundimage = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		{children}
	</StackItem>;
};

Object.assign(Roundimage, { ...StackItem,
	defaultProps,
	overrides
});
export default Roundimage;