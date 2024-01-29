import { useEffect, useState } from "react";
import SectionNavigation from "../SectionNavigation/SectionNavigation";


const ReviewScreen = ({pages}) => {

    const [sections, setSections] = useState([]);

    const extractSectionsRelatedToDocId = (sections=[], pages) => {
        let sectionsData = [];
        pages.map(page => {
            sectionsData = [
                ...sectionsData,
                {
                    docId: page.docId,
                    sectionItems: sections.filter(section => section.children.filter(child => child.doc_id === page.docId))
                }
            ]
        })
        return sectionsData;
    }

    useEffect(() => {
        if (pages.length) {
          async function getSections(url) {
            const sectionsRawData = await fetch(url);
            const sectionsJson = await sectionsRawData.json();
            console.log('sectionsJson', sectionsJson.data.sections)
            const sectionsData = extractSectionsRelatedToDocId(sectionsJson.data.sections, pages)
            setSections(sectionsData);
          }
          getSections('./data/sections.json');
        }
      }, [pages.length])

      return (
        <div>
            <SectionNavigation sections={sections} pages={pages} />
        </div>
      )
}

export default ReviewScreen;