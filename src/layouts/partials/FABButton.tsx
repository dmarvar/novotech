"use client";

import Icon from '@/components/Icon';
import Link from 'next/link';
import React from 'react';

const FABButton = ({ }: {}) => {
    return (
        <div className="z-50">
            <Link
                className="fixed bottom-8 right-6 btn btn-fab z-50 lg:hidden"
                href="/contact"
            >
                <Icon className={`text-[rgba(65,49,0,1)] text-2xl`} icon={"BsChatTextFill"} />
            </Link>
        </div>
    );
};

export default FABButton;