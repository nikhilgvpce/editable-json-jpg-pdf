import "./RightView.css"

const positionElements = (element) => {
    const className = `${element.id} section-item-wrapper`;
    const labelClassName = `${element.id}-section-item-label`;
    const valueClassName = `${element.id}-section-item-value`;

    const [top, right, top1, rigth1] = element?.content?.position || [0, 0, 0, 0];
    const divElement =
        <div className={className}>
            <span style={{ position: 'relative', top: `calc(30vw - ${top})`, right: `calc(30vw - ${right})` }} className={labelClassName}>{element.label}</span>
            <span style={{ position: 'relative', top: `calc(30vw - ${top1})`, right: `calc(30vw- ${rigth1})` }} className={valueClassName}>{element?.content?.value}</span>
        </div>;
    return (
        <>{divElement}</>
    )
}


const RightView = ({ sectionItems }) => {

    function getSectionItem(children) {
        return children.map((child) => {
            return (
                <>{positionElements(child)}</>
            )
        })
    }

    if (!sectionItems.length) return;

    return sectionItems.map((sectionItem) => {
        const { children } = sectionItem;
        return (
            <>
                {...getSectionItem(children)}
            </>
        )
    })
}

export default RightView;