import GalleryStar from './GalleryStar';

class GalleryModal {
    constructor() {
        this.el = null;
        this.Render();
        this.Open = this.Open.bind(this);
    }

    Open(e, data) {
        this.SetData(data);

        this.el.classList.add('show');
    }

    Close(e) {
        let modal = e.target.closest('.gallery-modal');
        modal.querySelector('.modal-content').remove();
        modal.classList.remove('show');
    }

    AddEventListeners() {
        // how to add global event on click outside of modal to close it - !!!! 
        // click on body and via mathces add event
    }

    SetData(data) {
        let modal = this.el;
        let movieFullInfo = document.createElement('div');
        movieFullInfo.classList.add('modal-content');

        let galleryStar = new GalleryStar(data.favorite).Render();
        galleryStar.classList.add('modal-view');

        let actors = this.RenderDetails(data.starring);
        let genres = this.RenderDetails(data.genres);

        movieFullInfo.innerHTML = `
            <div class="modal-info">
                <div class="img-wrap" style="background-image: url('${data.img}')">
                    ${galleryStar.outerHTML}
                </div>
                <div class="movie-general-info">
                    <p class="movie-title"><b>Title:</b> ${data.name}</p>
                    <p class="movie-director"><b>Director:</b> ${data.director}</p>
                    <p class="movie-description"><b>Description:</b> ${data.description}</p>
                </div>
            </div>
            <div class="modal-additional">
                <p class="movie-year"><b>Year</b>: ${data.year}</p>
                <p class="movie-genres"><b>Genres:</b> ${genres}</p>
                <p class="movie-actors"><b>Actors: </b> ${actors}</p>
            </div>       
        `
        modal.querySelector('.modal-wrap').appendChild(movieFullInfo);
    }

    RenderDetails(details) {
        let detailsList = '';
        details.forEach(detail => {
            let detailItem = document.createElement('span');
            detailItem.innerText = `${detail}`;
            detailsList += detailItem.outerHTML;
        });

        return detailsList;
    }

    Render() {
        let modal = document.createElement('div');
        modal.classList.add('gallery-modal');

        modal.innerHTML = `
            <div class="modal-wrap">
                <span class="close-modal">&#10006;</span>
            </div>
        `;
        
        this.el = modal;

        modal.querySelector('.close-modal').addEventListener('click', this.Close);

        document.body.appendChild(modal);
    }
}

export default GalleryModal;