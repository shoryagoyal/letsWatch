import { useId } from 'react';

function useGetUniqueIdForScrollbar() {
    const id = useId();
    return id.substring(1, id.length - 1);
}

export default useGetUniqueIdForScrollbar;
