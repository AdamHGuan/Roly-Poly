import React from "react";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

import "./Footer.css";

function Footer() {
	return (
		<>
			<div className="footerWrapper">
				<footer className="footerContainer">
					<div className="footerLeft">© 2021 Roly-Poly</div>
					<div className="footerRight">
						<div className="developer">
							<div>Adam Guan</div>
							<a
								href="https://www.linkedin.com/in/adam-g-86922aa0/"
								className="linkedinIcon"
							>
								<AiOutlineLinkedin />
							</a>
							<a href="https://github.com/AdamHGuan" className="githubIcon">
								<AiFillGithub />
							</a>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}

export default Footer;
