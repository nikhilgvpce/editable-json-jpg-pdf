import { useEffect, useState } from 'react'
import './App.css'
import ReviewScreen from './ReviewScreen/ReviewScreen';

function App() {

  const [pages, setPages] = useState([]);

  useEffect(() => {

    async function getPages(url) {
      const pagesRawData = await fetch(url);
      const pagesJson = await pagesRawData.json();
      console.log('pagesJson', pagesJson)
      const pageData = extractPagesInfo(pagesJson)
      setPages(pageData);
    }
    getPages('./data/pages.json');
  }, [])

  

  function extractPagesInfo(pages) {
    const pageData = pages.data.documents.map((page) => {
      return {
        docId: page.doc_id,
        title: page.title,
        type: page.type,
        status: page.status
      }
    })
    return pageData;
  }

  return (
    <>
      <ReviewScreen pages={pages} />
    </>
  )
}

export default App
