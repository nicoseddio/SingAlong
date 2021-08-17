let isSidebarOpen = true;
var defaultTabs = {
    'LibraryPanel': 'SongsTab',
    'MainWindow': 'LibraryPanel'
}
function openPanel(evt, tabName) {
    let tab = document.getElementById(tabName);
    if (isTabOpen(tab)) {
        if (isSidebarOpen) closeSidebar()
        hideElement(tab)
    }
    else {
        if (!isSidebarOpen) openSidebar()
        openTab(evt,tabName)
    }
}
function openTab(evt, tabName)
{
    let tab = document.getElementById(tabName);
    if (!isTabOpen(tab)) {
        var i, tablinks;
        // Close the sibling tabs of the requested tab
        let ts = document.getElementById(tabName).parentElement.getElementsByClassName("tabcontent");
        for (i = 0; i < ts.length; i++) {
            hideElement(ts[i])
        }
        // tablinks = document.getElementsByClassName("tabbutton");
        // for (i = 0; i < x.length; i++) {
        //   tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
        // }
        // document.getElementById(tabName).style.display = "block";
        // Open the requested tab
        showElement(tab)
        // evt.currentTarget.className += " w3-red";
    }
    else {
        hideElement(tab)
    }
}
function isTabOpen(element) {
    if (element.classList.contains('hidden')) return false
    else return true
}
function showElement(element) {
    removeClassIfExists(element,'hidden')
    openDefaultTab(element)
}
function hideElement(element) {
    addClassIfNotExists(element,'hidden')
}
function openDefaultTab(element) {
    try {
        if (element.id in defaultTabs) {
            showElement(document.getElementById(defaultTabs[element.id]))
        }
    } catch (error) {
        console.error(error)
    }
}
function addClassIfNotExists(element,className) {
    try {
        if (!element.classList.contains(className)) {
            element.classList.add(className)
        }
    } catch (error) {
        console.error(error)
    }
}
function removeClassIfExists(element,className) {
    try {
        if (element.classList.contains(className)) {
            element.classList.remove(className)
        }
    } catch (error) {
        console.error(error)
    }
}
function closeSidebar() {
    let w = document.getElementById('RenderWindow');
    removeClassIfExists(w,'width-three-fourths');
    addClassIfNotExists(w,'width-full')
    isSidebarOpen = false
}
function openSidebar() {
    let w = document.getElementById('RenderWindow');
    removeClassIfExists(w,'width-full');
    addClassIfNotExists(w,'width-three-fourths')
    isSidebarOpen = true
}