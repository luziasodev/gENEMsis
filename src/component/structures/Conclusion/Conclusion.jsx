import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Section from '../../Section/Section';


import 'react-tabs/style/react-tabs.css';

export default function Conclusion() {
  const sections = ["inter-conectivos", "tópico frasal", "intra-conectivos", "intervenção", "intra-conectivos", "fechamento"];

  return (
    <Tabs>
      <TabList>
        {sections.map((section) => <Tab>{section}</Tab>)}
      </TabList>

      {sections.map((section) => <TabPanel id={section}><Section /></TabPanel>)}
    </Tabs>
  )
}
