jQuery(document).ready(function () {
    if (jQuery.fn.editTable) {
        jQuery('.ct_single_size_table:not(.template) .ct_edit_table').editTable();
    }
    if (jQuery.fn.wpColorPicker) {
        jQuery('.ct-sg-color').wpColorPicker();
    }
});