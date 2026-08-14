function InsertBanner(src, max_width_percent) {
    return '<img src="' + src + '" style="width: min(' + max_width_percent + '%,1920px); margin-left: calc((100% - min(' + max_width_percent + '%,1920px)) * 0.5);">'
}

function InsertContentBox(title,image,image_border_radius,image_hoverable,image_flipped,text,link,height,text_on_left,text_heavy_mobile_version) {

    // Desktop
    let width = "min(1100px,calc(85% - 60px))"
    let margin_left_right = 'auto'

    let returning = '<div class="DesktopContentBox FadeIn" style="width:' + width + '; height:' + height + 'px;">'

    let text_section_margin_left = ""
    let image_section_margin_left = ""
    if (text_on_left) {
        text_section_margin_left = "0px"
        image_section_margin_left = "auto"
    } else {
        text_section_margin_left = "30px"
        image_section_margin_left = "0px"
    }

    let text_section_link_start = ''
    let text_section_link_end = ''
    let image_hoverable_link_start = ''
    let image_hoverable_link_end = ''
    if (link != '') {
        text_section_link_start = '<a href="' + link + '" class="DesktopContentBoxTitleLink">'
        text_section_link_end = '</a>'

        if (image_hoverable) {
            image_hoverable_link_start = '<a class="DesktopContentBoxImageLink" href="' + link + '" style="border-radius:' + image_border_radius + '; height:' + height + 'px; margin-left:' + image_section_margin_left + ';">'
            image_hoverable_link_end = '</a>'
        }
    }

    let image_scale_style = ''
    if (image_flipped) {
        image_scale_style = 'transform: scale(-1,1);'
    }

    let text_section = '<div style="margin-left:' + text_section_margin_left + '; max-height:' + height + 'px;">' + text_section_link_start + '<p class="DesktopContentBoxTitle">' + title + '</p>' + text_section_link_end + text + '</div>'
    let image_section = image_hoverable_link_start + '<img class="DesktopContentBoxImage" src="' + image + '" style="height:' + height + 'px; margin-left:' + image_section_margin_left + '; border-radius:' + image_border_radius + ';' + image_scale_style + '">' + image_hoverable_link_end

    if (text_on_left) {
        returning += text_section + image_section
    } else {
        returning += image_section + text_section
    }

    returning += '<div class="DesktopContentBoxTextFadeGradient"></div>'
    returning += '</div>'

    // Mobile
    text_section_link_start = ''
    text_section_link_end = ''
    let image_hoverable_class = ''
    image_hoverable_link_start = ''
    image_hoverable_link_end = ''
    if (link != '') {
        text_section_link_start = '<a href="' + link + '" class="MobileContentBoxTitleLink">'
        text_section_link_end = '</a>'

        if (image_hoverable) {
            image_hoverable_class = 'MobileContentBoxImageHoverable'
            image_hoverable_link_start = '<a href="' + link + '" style="border-radius:' + image_border_radius + ';">'
            image_hoverable_link_end = '</a>'
        }
    }

    if (text_heavy_mobile_version) {
        returning += '<div class="MobileContentBox FadeIn">' + text_section_link_start + '<p class="MobileContentBoxTitle">' + title +'</p>' + text_section_link_end + text + '</div>'
    } else {
        returning += '<div class="MobileContentBox FadeIn">' + image_hoverable_link_start + '<img class="MobileContentBoxImage ' + image_hoverable_class + '" src="' + image + '" style="border-radius:' + image_border_radius + ';">' + image_hoverable_link_end + text_section_link_start + '<p class="MobileContentBoxTitle">' + title +'</p>' + text_section_link_end + '</div>'
    }

    return returning
}

function InsertFooter() {
    return '<iframe id="Footer" src="iframes/footer.html"></iframe>'
}