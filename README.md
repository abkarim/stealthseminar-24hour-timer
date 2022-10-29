# 24 hour timer

Add 24 hour timer in StealthSeminar registration page.

![App Screenshot](screenshot.png)

## Usage

we will add custom javascript.

[ official doc about how to add custom javascript? ](https://help.stealthseminarapp.com/en/articles/2802201-custom-javascript)

Use the "Tracking Code Setup" in **"Miscellaneous"** menu, then click **"Tracking Code Setup"**.
We want to show timer in registration page so find **"Registration Page"** (you can use another option, if you want).
We will add our JavaScript code in the last field **BOTTOM OF PAGE** box.

If you want to edit something it is recommended that you first do editing the script.js file and then add it to the input.

```javascript
<script>
// ... script.js file content paste here
</script>
```

Then click **save**. \*By default this file will append timer as **first child on body.\***
But you have the option to change this behavior.

## How to change parent element of timer

Set parent selector in parentId

```javascript
const parentId = null; // element to append timer
//...
```

TO

```javascript
const parentId = "query selector here"; // element to append timer
//...
```

## Change style

Find following code and edit in script.js

```javascript
//...
// Styles
const styles = `
    /*Container */
    #ss-24-hour-timer-container {
        display: flex;
        gap: 1rem;
        background-color: white;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    /* Number */
    #ss-24-hour-timer-container .hour,
    #ss-24-hour-timer-container .minute,
    #ss-24-hour-timer-container .second
    {
        background-color: #1a9dd1;
        border-radius: 0.1rem;
        color: white;
        display: inline-block;
        font-size: 2.5rem;
        padding: 1rem;
    }
    /* Text */
    #ss-24-hour-timer-container .text
    {
        color:  #202020;
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
        margin-top: 0.1rem;
        text-align: center;
    }
`;
//...
```
