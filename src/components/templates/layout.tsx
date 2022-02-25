import { Fragment, ReactNode, VFC } from "react";
import Footer from "./footer";
import Header from "./header";

type layoutProps = {
	children: ReactNode;
};

const Layout: VFC<layoutProps> = (props) => {
	return (
		<Fragment>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</Fragment>
	);
};

export default Layout;
