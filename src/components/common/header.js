import React from 'react';
import {
  Link, Button, Input, Icon,
} from '@/components/ui';

const Header = () => {
  const linkCls = 'px-4 py-2';
  return (
    <header className="flex items-center my-6">
      <Link extraClassName={linkCls} to="/">
        <div className="font-bold">kommunity.app</div>
      </Link>
      <div className="flex flex-grow">
        <Link extraClassName={linkCls} to="/communities">Communities</Link>
        <Link extraClassName={linkCls} to="/features">Features</Link>
        <Link extraClassName={linkCls} to="/features">Pricing</Link>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <Input
            iconLeft={<Icon name="Search" className="stroke-current text-lightBlueGrey border-none" />}
            placeholder="Search Communities"
            type="text"
          />
        </div>
        <Link extraClassName={linkCls} to="/login">Login</Link>
        <Link extraClassName={linkCls} to="/signup">
          <Button extraClassName="font-medium text-base" size="small" styleType="outline" label="Signup" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
