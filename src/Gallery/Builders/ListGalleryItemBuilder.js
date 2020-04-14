class ListGalleryItemBuilder {
    Build(data, favoriteStar) {
        console.log(data)
        let item = document.createElement('div');
        item.classList.add('gallery-item', 'list');
        item.dataset.id = data.id;

        let genres = this.RenderDetails(data.genres);

        item.innerHTML = `
            <div class="gallery-img" style="background-image: url('${data.img}')"></div>
            <div class="gallery-text">
                <div class="movie-info"><div>
                    <p><b>Movie: </b>${data.name}</p>                
                    <p><b>Year: </b>${data.year}</p>
                </div>
                <p class="description"><b>Descritpion: </b>${data.description}</p>
                <p class="movie-genres"><b>Genres:</b> ${genres}</p>
            </div>           
        `;

        item.appendChild(favoriteStar.Render());

        return item;
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
}

export default ListGalleryItemBuilder;