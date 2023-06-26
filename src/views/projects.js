import { html } from "lit";

export default () => html`
    <div class="projects">
        <h1 class="heading-primary">Projects</h1>
        <p class="paragraph">Here you can find all the projects I have worked on 🙌</p>

        <!-- TODO: Maybe add links to filter projects by language or else -->

        <!-- Project List -->
        <ul class="projects__items">
            <li class="project__item">
                <!-- Project 1 Quote Generator -->
                <div class="card u-margin-top-huge">
                    <header class="card__header">
                        <h2 class="heading-secondary">Quote Generator</h2>
                        <img src="../images/projects/quote.png" alt="Image of Quote Generator App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple quote generator app that uses an API to fetch random quotes and display
                            them on the
                            screen. Get inspired by the quotes and share them with your friends! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/01.quote-generator" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/01.quote-generator" target="_blank" class="btn">View on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 2 Infinite Scroll -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Infinite Scroll</h2>
                        <img src="../images/projects/infinite.png" alt="Image of Infinite Scroll App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple infinite scroll app that uses an API to fetch random images and display
                            them on the
                            screen. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/02.Infinite-scroll" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/02.Infinite-scroll" target="_blank" class="btn">View on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 3 Picture In Picture -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Picture in Picture</h2>
                        <img src="../images/projects/p-p.png" alt="Image of Picture in Picture App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple picture in picture app that allows you to select a window or a tab and
                            display it on
                            the screen. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/03.picture-in-picture" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/03.picture-in-picture" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 4 Tell Me A Joke -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Tell Me A Jokes</h2>
                        <img src="../images/projects/joke.png" alt="Image of Tell Me A Jokes App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple joke generator app that uses an API to fetch random jokes and display them
                            on the screen. There are no filters for the jokes so be careful! Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/04.tell-me-a-joke" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/04.tell-me-a-joke" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 5 Light/Dark Mode -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Light/Dark Mode</h2>
                        <img src="../images/projects/dark-mode.png" alt="Image of Light/Dark Mode App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple light/dark mode app that allows you to switch between light and dark mode
                            and save
                            your preference in the local storage. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/05.light-dark-mode" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/05.light-dark-mode" target="_blank" class="btn">View on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 6 Animated Template -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Animated Template</h2>
                        <img src="../images/projects/template-animation.png" alt="Image of Animated Template App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple animated template app that uses an API to fetch random users and display
                            them on the
                            screen. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/06.animated-template" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/06.animated-template" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 7 NAvigation Nation -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Navigation Nation</h2>
                        <img src="../images/projects/nav.png" alt="Image of Navigation Nation App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple navigation nation app that helped me practice my animated skill on a real
                            project. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/07.animated-navigation/" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/07.animated-navigation" target="_blank"
                            class="btn">View
                            on
                            Github</a>
                    </div>
            </li>
            <li class="project__item">
                <!-- Project 8 Music Player -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Music Player</h2>
                        <img src="../images/projects/music-player.png" alt="Image of Music Player App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple music player app that I made during a course I took from Udemy.
                            There are four great song made by the course creator himself. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/08.music-player" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/08.music-player" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 9 Custom Countdown -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Custom Countdown</h2>
                        <img src="../images/projects/countdown.png" alt="Image of Custom Countdown App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple custom countdown app that I made during a course I took from Udemy.
                            You can set a date and a title and the app will count down the time left until that date.
                            Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/09.custom-countdown-" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/09.custom-countdown-" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 10 Bookmark Keeper -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Bookmark Keeper</h2>
                        <img src="../images/projects/bookmark.png" alt="Image of Bookmark Keeper App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple bookmark keeper app that I made during a course I took from Udemy. You can
                            add bookmarks and delete them. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://github.com/vasildimov98/10.bookmark-keeper" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://vasildimov98.github.io/10.bookmark-keeper/" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 11 Video Player -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Video Player</h2>
                        <img src="../images/projects/video.png" alt="Image of Video Player App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple video player app that I made during a course I took from Udemy. You can
                            play around with the video and the controls. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://github.com/vasildimov98/10.bookmark-keeper" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://vasildimov98.github.io/10.bookmark-keeper/" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 12 Form Validator -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Form Validator</h2>
                        <img src="../images/projects/form-validator.png" alt="Image of Form Validator App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple form validator app that I made during a course I took from Udemy. You can
                            add your name, email, password and confirm password. None of the data is saved anywhere.
                            Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href=" https://vasildimov98.github.io/12.form-validator/" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/12.form-validator" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 13 Rock Paper Scissors Lizard Spock  -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Rock Paper Scissors Lizard Spock </h2>
                        <img src="../images/projects/spock-rock.png"
                            alt="Image of Rock Paper Scissors Lizard Spock  App" class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple Rock Paper Scissors Lizard Spock app that I made during a course I took
                            from Udemy. You can play against the computer. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/13.spock-rock-game/" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/13.spock-rock-game" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 14 NASA API Picture -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">NASA API Picture</h2>
                        <img src="../images/projects/nasa.png" alt="Image of NASA API Picture App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple NASA API Picture app that I made during a course I took from Udemy. You
                            can
                            see a picture from NASA's API and explore the vast universe. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/14.nasa-api-pictures/" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/14.nasa-api-pictures" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 15 Math Sprint Game -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Math Sprint Game</h2>
                        <img src="../images/projects/math-game.png" alt="Image of Math Sprint Game App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple Math Sprint Game app that I made during a course I took from Udemy. You
                            can
                            play against the computer. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/15.math-sprint-game" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/15.math-sprint-game" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class="project__item">
                <!-- Project 16 Kibana Board -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Kibana Board</h2>
                        <img src="../images/projects/kibana.png" alt="Image of Kibana Board App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple Kibana Board app that I made during a course I took from Udemy. You can
                            manage your tasks and projects. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/16.drag-and-drop" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/16.drag-and-drop" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class=" project__item">
                <!-- Project 17 Calculator -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Calculator</h2>
                        <img src="../images/projects/calculator.png" alt="Image of Calculator App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple Calculator app that I made during a course I took from Udemy. You can
                            calculate numbers. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/17.calculator/" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/17.calculator" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class=" project__item">
                <!-- Project 18 Splash Page -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Splash Page</h2>
                        <img src="../images/projects/splash-page.png" alt="Image of Splash Page App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple Splash Page app that I made during a course I took from Udemy. You can
                            see
                            a splash page. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/18.splash-page/" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/18.splash-page" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class=" project__item">
                <!-- Project 19 Paint Clone  -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Paint Clone</h2>
                        <img src="../images/projects/paint-clone.png" alt="Image of Paint Clone App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple Paint Clone app that I made during a course I took from Udemy. You can
                            draw
                            on the canvas. Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/19.paint-clone/" target="_blank"
                            class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/19.paint-clone" target="_blank" class="btn">View
                            on
                            Github</a>
                    </div>
                </div>
            </li>
            <li class=" project__item">
                <!-- Project 20 Pong -->
                <div class="card u-margin-top-large">
                    <header class="card__header">
                        <h2 class="heading-secondary">Pong</h2>
                        <img src="../images/projects/pong.png" alt="Image of Pong App"
                            class="card__image u-margin-top-small">
                    </header>
                    <div class="card__content u-margin-top-small ">
                        <p class="paragraph">
                            This is a simple Pong app that I made during a course I took from Udemy. You can play
                            Pong.
                            Enjoy! 🤩
                        </p>
                    </div>
                    <div class="card__footer u-margin-top-large">
                        <a href="https://vasildimov98.github.io/20.pong/" target="_blank" class="btn btn--cta">Check
                            it out</a>
                        <a href="https://github.com/vasildimov98/20.pong" target="_blank" class="btn">View on
                            Github</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
`;
