import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import './PublicPage.css';

import Introduction from '../../component/structures/Introduction/Introduction'
import Development from '../../component/structures/Development/Development'
import Conclusion from '../../component/structures/Conclusion/Conclusion'

export default function PublicPage() {
  return (
    <>
      <div className='container'>
        <div className='container-repertorio'>
          <div className='caixatema'>
            <input type="text" name="tema" id="tema" placeholder="Escreva aqui o tema" />
          </div>

          <div className='repertorio'>
            <Tabs>
              <TabList>
                <Tab>Introdução</Tab>
                <Tab>Desenvolvimento I</Tab>
                <Tab>Desenvolvimento II</Tab>
                <Tab>Conclusão</Tab>
              </TabList>

              <TabPanel>
                <Introduction />
              </TabPanel>
              <TabPanel>
                <Development />
              </TabPanel>
              <TabPanel>
                <Development />
              </TabPanel>
              <TabPanel>
                <Conclusion />
              </TabPanel>
            </Tabs>
          </div>
        </div>

        <div className='container-redacao'>
          <div className='caixatema'><h2>Redação</h2></div>
          <div className='redacao'></div>
        </div>
      </div>
    </>
  )
}
