import { useEffect, useState } from "react";
import "./SectionNavigation.css"
import LeftView from "../LeftView/LeftView";
import RightView from "../RightView/RightView";


const SectionNavigation = ({ sections, pages }) => {

    console.log('sections are', sections);
    console.log('pages are', pages);

    const [currentPageId, setCurrentPageId] = useState(null);
    const [currentSection, setCurrentSection] = useState([]);

    useEffect(() => {

    }, [])
    if (!pages.length || !sections.length) return;

    return (
        pages.map(page => {
            const docId = page.docId;
            const section = sections.find(sec => sec.docId === docId);
            const { sectionItems } = section;
            return (
                <div className="sections-container">
                    <LeftView sectionItems={sectionItems} />
                    <RightView sectionItems={sectionItems} />
                </div>
            )
        })
    )
}

export default SectionNavigation;