function isValidSocialItem (item) {
    // item - object

    if (typeof item !== 'object') {
        return false;
    }

    // item.href - string (tekstas)

    

    // item.href - ne tuscias string
    // item.icon - string
    // item.icon - ne tuscias string
    return true;
}

export { isValidSocialItem }