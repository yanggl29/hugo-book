(function() {
  var menu = document.querySelector("aside .book-menu-content");
  
  // Save menu state
  addEventListener("beforeunload", function(event) {
    localStorage.setItem("menu.scrollTop", menu.scrollTop);
    
    // Save expanded items state
    const expandedItems = {};
    document.querySelectorAll('.toggle').forEach(toggle => {
      expandedItems[toggle.id] = toggle.checked;
    });
    localStorage.setItem("menu.expanded", JSON.stringify(expandedItems));
  });

  // Restore menu state
  menu.scrollTop = localStorage.getItem("menu.scrollTop");
  
  // Restore expanded items
  const expandedItems = JSON.parse(localStorage.getItem("menu.expanded") || "{}");
  Object.keys(expandedItems).forEach(id => {
    const toggle = document.getElementById(id);
    if (toggle) {
      toggle.checked = expandedItems[id];
    }
  });
})();