import Link from 'next/link';
import React from 'react';
// import { Divider } from "@heroui/react";
const Footer = () => {
    return (
        <footer className="bg-black text-white ">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        
        <div>
          <h2 className="text-2xl font-bold text-orange-500">
            SkillShare
          </h2>

          <p className="text-gray-400 mt-4 text-sm leading-6">
            Upgrade your skills with industry-leading courses and
            expert mentors from around the world.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact Info
          </h3>

          <div className="space-y-2 text-gray-400 text-sm">
            <p>Email: support@SkillShare.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Social Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-400 text-sm">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-orange-500 transition"
            >
              Facebook
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-orange-500 transition"
            >
              Instagram
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-orange-500 transition"
            >
              Twitter
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-orange-500 transition"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Legal
          </h3>

          <div className="flex flex-col gap-3 text-gray-400 text-sm">
            <Link
              href=""
              className="hover:text-orange-500 transition"
            >
              Terms & Conditions
            </Link>

            <Link
              href=""
              className="hover:text-orange-500 transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* <Divider className="bg-white/10" /> */}

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© 2026 SkillShare. All rights reserved.</p>

       
      </div>
    </footer>
    );
};

export default Footer;