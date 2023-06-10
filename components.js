// LINKS

class Links extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="">View On GitHub</a></li>
            <li><a href="">About Me</a></li>
        </ul>`;
    }

}

customElements.define('x-links', Links);

// Lang

class Lang extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const urlPath = window.location.pathname;
        const isEs = /es&/i.test(urlPath);
        const hrefEn = isEs ? urlPath.replace('/es', '') : urlPath;
        const hrefEs = isEs ? urlPath : urlPath.trim('\/') + '/es';
        console.log(urlPath.trim('/'));
        this.innerHTML = `<a href="${hrefEn}" ${isEs ? '' : 'selected'}>English</a>
        <a href="${hrefEs}" ${isEs ? 'selected' : ''}>Español</a>`;
    }

}

customElements.define('x-lang', Lang);

// DEMO

class Demo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="preview"></div>
        <form action="uploadTest.php" method="post" enctype="multipart/form-data">
            <div id="dragbox">
                Drag and Drop Images or <label for="file">Click Here!</label>
                <input type="file" name="files[]" id="file" multiple hidden>
            </div>
        </form>
        <br>
        <!-- Demo Code -->
        <pre>&lt;div class=&quot;preview&quot;&gt;&lt;/div&gt;
&lt;div id=&quot;dragbox&quot;&gt;
Drag and Drop Images or &lt;label for=&quot;file&quot;&gt;Click Here!&lt;/label&gt;
&lt;input type=&quot;file&quot; name=&quot;files[]&quot; id=&quot;file&quot; multiple hidden&gt;
&lt;/div&gt;</pre>

        <pre>import FileDragBox from './lib/filedragbox.js';

new FileDragBox('#dragbox', {
inputFile: '#file',
accept: ['image/jpeg', 'image/png'],
success: function (e, files) {
    const preview = document.querySelector('.preview');
    preview.innerHTML = '';
    [...files].forEach((image) =&gt; {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(image);
        img.title = image.name;
        preview.appendChild(img);
    });
}
});</pre>`;
    }

}

customElements.define('x-demo', Demo);

// How Install PT.1

class HowInstallPtOne extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <pre>&lt;script src=&quot;./lib/filedragbox.js&quot;&gt;&lt;/script&gt; &lt;!-- IN LOCAL --&gt;</pre>
        <pre>&lt;script src=&quot;//cdn.pkg/lib/filedragbox.js&quot;&gt;&lt;/script&gt; &lt;!-- CDN --&gt;</pre>`;
    }

}

customElements.define('x-how-install-pt-one', HowInstallPtOne);

// PT.2

class HowInstallPtTwo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <pre>&gt; npm install filedragbox --save</pre>
        <pre>import FileDragBox from './lib/filedragbox.js';</pre>`;
    }

}

customElements.define('x-how-install-pt-two', HowInstallPtTwo);

// HOW USE - STEP ONE PT.1

class HowUseStOnePtOne extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <pre>&lt;script src=&quot;//cdn.pkg/lib/filedragbox.js&quot;&gt;&lt;/script&gt; &lt;!-- CDN --&gt;</pre>`;
    }

}

customElements.define('x-how-use-st-one-ptone', HowUseStOnePtOne);

// HOW USE - STEP ONE PT.2

class HowUseStOnePtTwo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <pre>import FileDragBox from './lib/filedragbox.js';</pre>`;
    }

}

customElements.define('x-how-use-st-one-pttwo', HowUseStOnePtTwo);

// HOW USE - STEP TWO

class HowUseStTwo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <pre class="language-html">&lt;div id=&quot;dragbox&quot;&gt;
Drag and Drop Files Here!
&lt;/div&gt;</pre>`;
    }

}

customElements.define('x-how-use-st-two', HowUseStTwo);

// HOW USE - STEP THREE

class HowUseStThree extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <pre>new FileDragBox('#dragbox', {
accept: ['image/jpeg', 'image/png'],
success: function (e, files) {
    console.log(files)
}
});</pre>`;
    }

}

customElements.define('x-how-use-st-three', HowUseStThree);

// USE WITHOUT INPUT:FILE

class UseWithoutInputFile extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <pre>new FileDragBox('#dragbox', {
success: function (e, files) {
    console.log(files)
}
});</pre>`;
    }

}

customElements.define('x-use-wth-input-file', UseWithoutInputFile);

// USE WITH INPUT:FILE

class UseWithInputFile extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <pre class="language-html">&lt;div id=&quot;dragbox&quot;&gt;
Drag and Drop Images or &lt;label for=&quot;file&quot;&gt;Click Here!&lt;/label&gt;
&lt;input type=&quot;file&quot; name=&quot;files[]&quot; id=&quot;file&quot; multiple hidden&gt;
&lt;/div&gt;</pre>

        <pre>new FileDragBox('#dragbox', {
inputFile: '#file',
success: function (e, files) {
    console.log(files);
}
});</pre>`;
    }

}

// USE WITH INPUT:FILE AND EVENT CHANGE

class UseWithInputFileEvtChange extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <pre>new FileDragBox('#dragbox', { inputFile: '#file' });</pre>

        <pre>const myInput = document.querySelector('#dragbox');
myInput.addEventListener('change', (e) =&gt; {
console.log('MyInput:', e.target.files);
})</pre>`;
    }

}

customElements.define('x-use-w-input-file-evt-change', UseWithInputFileEvtChange);

// HOW CLEAR FILE LIST

class HowClearFileList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <pre>const mydragbox = new FileDragBox('#dragbox', { inputFile: '#file' });</pre>
        <pre>mydragbox.clear(); // Clear Files (items) in DataTransfer</pre>`;
    }

}

customElements.define('x-how-clear-file-list', HowClearFileList);