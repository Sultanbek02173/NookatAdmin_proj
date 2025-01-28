import React from 'react';
import { CompanyLinks, Gallery, ViewSuggestions } from '../../widgets';
import './homePage.scss';
export const HomePage = () => {
    return (
        <div>
            <ViewSuggestions />
            <Gallery />
            <CompanyLinks />
        </div>
    );
}

