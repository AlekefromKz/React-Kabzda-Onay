import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile Status With Hooks component",() => {
    test('status from props should force update state in the component', () => {
        const component = create(<ProfileStatus status={"aleke"}/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("aleke")
    });

    test('span is displayed initially', () => {
        const component = create(<ProfileStatus status={"aleke"}/>)
        const root = component.root
        const span = root.findByType("span")
        expect(span).not.toBeNull()
    });

    test('span has proper text', () => {
        const component = create(<ProfileStatus status={"aleke"}/>)
        const root = component.root
        const span = root.findByType("span")
        expect(span.children[0]).toBe("aleke")
    });

    test('input is not displayed initially', () => {
        const component = create(<ProfileStatus status={"aleke"}/>)
        const root = component.root
        expect(() => {
            const input = root.findByType("input")
            expect(input).toBeNull()
        }).toThrow()
    });

    test('input is displayed in edit mode', () => {
        const component = create(<ProfileStatus status={"aleke"}/>)
        const root = component.root
        const span = root.findByType("span")
        span.props.onDoubleClick()
        const input = root.findByType("input")
        expect(input.props.value).toBe("aleke")
    });

    test('callback shall be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"aleke"} updateProfileStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    });
})
