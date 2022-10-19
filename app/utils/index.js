export function AuthGuard(req, res, next) { // this is a middleware
    if(!req.isAutheticated()) {
        return res.redirect('/login');
    }
}

export function UserDisplayName(req) {
    if(req.user) {
        return req.user.displayName;
    }

    return '';
}