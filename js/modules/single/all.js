/* ======================== For All Normal selections ======================== */

export default function allOne(selecty, holder) {
    selecty.forEach(function (exactSelect) {
        let value = "", // Selection value
            optText = "",
            optAll = exactSelect.options, // All options

            ds = holder || optAll[0].text || optText, // The placeholder
            parent = exactSelect.parentElement || document.querySelector('[data-wrapper=' + exactSelect.getAttribute("name") + "]");

        // our replacement 
        let our_div = document.createElement("div");
        our_div.classList.add("replacement");
        our_div.setAttribute('data-select-name', exactSelect.getAttribute("name"));

        // The input for filtering and showing the selected options
        let placeholder = document.createElement('input');
        placeholder.classList.add('replacement-input'); // Add classes 
        placeholder.setAttribute('placeholder', ds); // add initial value 

        /* Delete the first item which is the placeholder */
        if (!holder) optAll.remove(0);

        // The whole list
        let our_list = document.createElement('ul');
        our_list.classList.add('replacement-ul');

        // Add options to the replacement
        for (let index = 0; index < optAll.length; index++) {
            const opt = optAll[index];

            // The itmes list
            let our_item = document.createElement('li');
            our_item.classList.add('replacement-ul--li');
            our_item.setAttribute('data-val', opt.value);

            // The span
            let our_span = document.createElement('span');
            our_span.classList.add('span');
            let TheText = document.createTextNode(opt.text); // you can add text from here

            // The check button
            let checker = document.createElement('div');
            checker.classList.add('checker');

            let icon = document.createElement('i');
            icon.classList.add("fa", "far-faacebook");

            checker.append(icon)
            our_span.append(TheText)
            our_item.append(our_span, checker)
            our_list.append(our_item);
        }
        our_div.append(placeholder, our_list)
        parent.append(our_div);

        exactSelect.style.display = "none"; // Hide the element

        // handle the selection
        let clickable = parent.querySelectorAll('.replacement-ul--li');

        clickable.forEach(function (li) {
            li.onclick = function () {
                let el = this;
                let text = this.firstChild.innerText;
                let val = this.getAttribute('data-val');
                let allOptions = [...optAll];
                let exactOpt = allOptions.find(option => {
                    return option.value == val;
                });

                let input = el.parentElement.previousSibling;

                let checker_checked = parent.querySelectorAll('.replacement-ul--li .checker.checked');
                if (checker_checked) {
                    checker_checked.forEach(n => {
                        n.classList.remove("checked")
                    });
                };
                console.log(checker_checked);

                /* Add Checked class to checker to inform the user he has checked the button and take the value of it or remove it from the value array */
                if (!el.lastElementChild.classList.contains("checked")) {
                    allOptions.forEach(opt => {
                        opt.selected = '';
                    });
                    exactOpt.selected = 'selected';
                    el.lastElementChild.classList.add("checked");
                    value = val;
                    value = val;
                    optText = text;

                    // Set the placeholder
                    input.setAttribute("placeholder", text)
                }

                console.log(exactOpt, "o");

            }
        });
    }); // End of the function
};