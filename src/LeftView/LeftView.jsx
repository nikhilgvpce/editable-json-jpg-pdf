import "./LeftView.css"

const LeftView = ({ sectionItems }) => {


    function getSectionItem (children) {
        return children.map((child) => {
            return (
                <div key={child.id} className="left-panel-item">
                    <span className="left-panel-item-label">{child.label}</span>
                    <span className="left-panel-item-value">{child?.content?.value}</span>
                </div>
            )
        })
    }


    function getSectionItems(sectionItems) {
        return sectionItems.map((sectionItem) => {
            const { title, children } = sectionItem;
            return (
                <>
                    <div className="section-header">{title}</div>
                    {getSectionItem(children)}
                </>
            )
        })
    }

    return (
        <div className="left-panel-items">
            {getSectionItems(sectionItems)}
        </div>
    )
}

export default LeftView;