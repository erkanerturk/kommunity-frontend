import React from 'react';
import { Link, Paragraph } from '@/components/ui';
import Logo from '@/components/common/logo';
import MailSignup from '@/components/vendor/mail-signup';

const classes = {
  caption: 'leading-base text-blueyGrey text-xs mb-6 uppercase tracking-tight',
  footerLinkColor: 'text-blueyGrey hover:text-primary',
  inlineList: 'list-reset flex',
  inlineListItem: 'leading-base text-xs tracking-tight text-blueyGrey',
  inlineListItemLink: 'leading-base no-underline text-xs tracking-tight text-blueyGrey mr-6 ',
  linkColor: 'text-gunmetal hover:text-primary',
  list: 'list-reset',
  listItem: 'mb-6',
  listItemLink: 'leading-base no-underline',
};

/*
IN CASE NUMBER OF CITIES CHANGES: you need to update the app.css line 32 as well!

duration is the amount of time a city appears and fades,
can be changed to any value, doesn't require any other update.
*/

const cities = ['Istanbul', 'San Francisco', 'Seattle'];
const duration = 3; // seconds
const style = {
  city: {
    animation: `${duration}s city-fade infinite`,
  },
  cityWrapper: {
    animation: `${cities.length * duration}s city-move ${duration / 2}s step-start infinite`,
  },
};

const Footer = () => {
  return (
    <div>
      <div className="flex py-10">
        <div className="w-1/4 ml-auto">
          <Logo />
        </div>
        <div className="w-2/12">
          <Paragraph className={classes.caption}>Product</Paragraph>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <Link className={classes.listItemLink} color={classes.linkColor} to="/communities">
                Communities
              </Link>
            </li>
            <li className={classes.listItem}>
              <Link className={classes.listItemLink} color={classes.linkColor} to="/features">
                Features
              </Link>
            </li>
            <li className={classes.listItem}>
              <Link className={classes.listItemLink} color={classes.linkColor} to="/our-story">
                Our Story
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-2/12">
          <Paragraph className={classes.caption}>Get in touch</Paragraph>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <Link className={classes.listItemLink} color={classes.linkColor} to="/contact">
                Contact
              </Link>
            </li>
            <li className={classes.listItem}>
              <Link className={classes.listItemLink} color={classes.linkColor} to="/feedback">
                Feedback
              </Link>
            </li>
            <li className={classes.listItem}>
              <Link className={classes.listItemLink} color={classes.linkColor} to="/roadmap">
                Roadmap
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/4 mr-auto">
          <MailSignup />
        </div>
      </div>
      <div className="flex justify-between border-t py-10 border-pale-blue w-10/12 mx-auto">
        <div className="flex">
          <Paragraph className={classes.inlineListItem}>Made with &hearts; in&nbsp;</Paragraph>
          <div className="overflow-hidden h-6">
            <div style={style.cityWrapper}>
              {cities.map((c, i) => {
                return (
                  <Paragraph
                    className={classes.inlineListItem}
                    style={style.city}
                    key={i.toString()}
                  >
                    {c}
                  </Paragraph>
                );
              })}
            </div>
          </div>
        </div>

        <ul className={classes.inlineList}>
          <li className={classes.inlineListItem}>
            <Link
              className={classes.inlineListItemLink}
              color={classes.footerLinkColor}
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </li>
          <li className={classes.inlineListItem}>
            <Link
              className={classes.inlineListItemLink}
              color={classes.footerLinkColor}
              to="/terms-of-use"
            >
              Terms Of Use
            </Link>
          </li>
          <li className={classes.inlineListItem}>
            <Paragraph className={classes.inlineListItem}>
              ©{new Date().getFullYear()}
              <span>&nbsp;All Rights Reserved.</span>
            </Paragraph>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
