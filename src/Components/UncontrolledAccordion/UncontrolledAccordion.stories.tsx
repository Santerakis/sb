import React, {useState} from 'react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
}

export const UncontrolledAccordionT = () => <UncontrolledAccordion titleValue={'T'}/>
export const UncontrolledAccordionCaps = () => <UncontrolledAccordion titleValue={'TITLE'}/>
