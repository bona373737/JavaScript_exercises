```js
//@main.js
//@구본아
//@카카오 책검색 openApi활용 책검색 기능 구현

const KAKAO_KEY = '1ec49be112f4786c2d52d4c0b706c6f4';
let currentPage = 1;
let searchWord = null;
let sortSelectedValue = null;
let pageSize = null;
let isEnd = false;

document.querySelector('#searchBtn').addEventListener('click', e => {
    e.preventDefault();

    const searchInput = document.querySelector('#searchWord');
    searchWord = searchInput.value.trim();
    // console.log('searchWord : ' + searchWord);
    const sortCondition = document.querySelector('#sortCondition');
    const sortSelectedIndex = sortCondition.selectedIndex;
    sortSelectedValue = sortCondition[sortSelectedIndex].value;
    // console.log('sortSelected :' + sortSelectedValue);
    const page = document.querySelector('#pageSize');
    const pageIndex = page.selectedIndex;
    pageSize = Number(page[pageIndex].value);
    // console.log('pageSize:' + pageSize);

    if (!searchWord) {
        alert('검색어를 입력해주세요')
        searchInput.focus();
        return;
    }

    currentPage = 1;
    getBookSearch();

}) //searchBtn click event end

window.addEventListener('scroll', e => {
    if (isEnd || document.querySelector('#loading').classList.contains('active')) {
        return;
    }
    const scrollTop = window.scrollY;
    const windowHeight = window.screen.availHeight;
    const documentHeight = document.body.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
        currentPage++;
        getBookSearch();
    }
})


async function getBookSearch() {
    const searchItem = document.querySelector('#searchItem');

    const loading = document.querySelector('#loading');
    loading.classList.add('active');

    if (currentPage == 1) {
        const arr = Array.from(searchItem.getElementsByTagName('li')) 
        arr.forEach((v, i) => {
            console.log('aaaaaaa');
            searchItem.removeChild(v);

            console.log(v);
        });
    }

    let json = null;
    try {
        json = await axios.get('https://dapi.kakao.com/v3/search/book?target=title', {
            params: {
                query: searchWord,
                sort: sortSelectedValue,
                size: pageSize,
            },
            headers: {
                Authorization: `KakaoAK ${KAKAO_KEY}`,
            },
        })
        console.log(json);
    } catch (error) {
        console.error(error);
        alert('요청을 처리하는데 실패했습니다.');
        return;

    } finally {
        loading.classList.remove('active');
    }

    if (json != null) {
        const {
            data
        } = json;
        isEnd = data.meta.is_end;

        data.documents.map((v, i) => {
            const li = document.createElement('li');
            searchItem.appendChild(li);

            const a = document.createElement('a');
            a.setAttribute('href', v.url);
            const img = document.createElement('img');
            img.setAttribute('src', v.thumbnail || './img/noimage.jpg');
            const div1 = document.createElement('div');
            div1.setAttribute('id', 'text-wrap');
            const h3 = document.createElement('h3');
            h3.innerHTML = v.title;
            const p_contents = document.createElement('p');
            p_contents.innerHTML = v.contents;
            const div2 = document.createElement('div');
            div2.setAttribute('id', 'detail');
            const ul2 = document.createElement('ul');
            const li1 = document.createElement('li');
            li1.innerHTML = v.authors;
            const li2 = document.createElement('li');
            li2.innerHTML = v.publisher;
            const li3 = document.createElement('li');
            li3.innerHTML = v.price;
            const li4 = document.createElement('li');
            li4.innerHTML = v.sale_price;

            li.appendChild(a);
            a.appendChild(img);
            a.appendChild(div1);
            div1.appendChild(h3);
            div1.appendChild(p_contents);
            div1.appendChild(div2);
            div2.appendChild(ul2);
            ul2.appendChild(li1);
            ul2.appendChild(li2);
            ul2.appendChild(li3);
            ul2.appendChild(li4);
        })
    }

} //async function end

```