/**
 * Created by Ravi Teja on 9/17/2015.
 */
app.factory('navigationFactory',[function navFn(){
    var navBar = [
        {
            displayName:"Home",
            routeName:"home"
        },
        {
            displayName:"About",
            routeName:"about"
        },
        {
            displayName:"Register",
            routeName:"register"
        },
        {
            displayName:"Contact",
            routeName:"contact"
        },
        {
            displayName:"IDK",
            routeName:"idk"
        },
    ];
    return{
        getNavigationItems:function(){
            return navBar;
        }
    }
}])