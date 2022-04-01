export const updateObjectInArray = (items, objPropValue, objPropName, newProps) => {
    return items.map(item => {
        if (item[objPropName] === objPropValue) {
            return {...item, ...newProps,}
        }
        return item
    })
}
