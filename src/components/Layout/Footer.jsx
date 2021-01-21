import React from "react"

import githubIcon from "@images/icons/github.svg"
import linkedInIcon from "@images/icons/linkedin.svg"

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black-90 border-l border-gray-700 px-20 pt-10 pb-8"
    >
      <div className="flex flex-row justify-around">
        <p className="text-gray-100">
          <a
            href="https://github.com/strickdj"
            target="_blank"
            rel="noopener noreferrer"
            title="Github Profile"
          >
            <img alt="github icon" src={githubIcon} />
          </a>
        </p>
        <p className="text-gray-100"></p>

        <p className="text-gray-100">
          <a
            href="https://www.linkedin.com/in/daris-strickland-868a9269"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
          >
            <img alt="LinkedIn icon" src={linkedInIcon} />
          </a>
        </p>
      </div>
      <hr className="border-gray-700 my-5" />
      <p className="text-gray-200 text-right text-sm ">
        &copy; {new Date().getFullYear()} Daris Strickland
      </p>
    </footer>
  )
}

export default Footer
