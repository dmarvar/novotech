"use client";

import Icon from '@/components/Icon';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import Link from 'next/link';
import React from 'react';

const FABButton = ({ }: {}) => {
    const { isAboveLg } = useBreakpoint("lg");
    const isMobileLayout = !isAboveLg;
    return (
        <div className="z-50">
            {isMobileLayout && (
                <Link
                    className="fixed bottom-8 right-6 btn btn-fab z-50 "
                    href="/contact"
                >
                    <Icon className={`text-[rgba(65,49,0,1)] text-2xl`} icon={"BsChatTextFill"} />
                </Link>
            )}
        </div>
    );
};

export default FABButton;