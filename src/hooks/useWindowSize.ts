import { useEffect, useState } from "react";

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResizeWindow = () => {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			};
			window.addEventListener("resize", handleResizeWindow);
			handleResizeWindow();
			return () => window.removeEventListener("resize", handleResizeWindow);
		} else {
			return;
		}
	}, []);

	return windowSize;
};

export default useWindowSize;
