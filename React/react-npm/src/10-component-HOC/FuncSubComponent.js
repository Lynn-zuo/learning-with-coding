import { forwardRef } from 'react'

export default forwardRef(function FuncSubComponent (props, ref) {
    return (
        <div ref={ref}>function component</div>
    )
})
