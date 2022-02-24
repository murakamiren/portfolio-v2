import { Fragment, ReactNode, VFC } from "react";
import Header from "./header";

type layoutProps = {
	children: ReactNode;
};

const Layout: VFC<layoutProps> = (props) => {
	return (
		<Fragment>
			<Header />
			<main>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
