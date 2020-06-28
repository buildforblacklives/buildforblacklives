import React from "react";

let companies = [{id: 0, title: "Project Title 1", name: "Organization Name 1"},
                 {id: 1, title: "Project Title 2", name: "Organization Name 2"},
                 {id: 2, title: "Project Title 3", name: "Organization Name 3"},
                 {id: 3, title: "Project Title 4", name: "Organization Name 4"},
                 {id: 4, title: "Project Title 5", name: "Organization Name 5"}]

class ProjectsPage extends React.Component {

    state = {
        selected: -1
    }


    render() {
        return (
          <div class="page-container">

            <div class="row">
                <div class="col col-md-7 overflow-auto scrolling">
                    <div class="row card-row">
                            {companies.map(company =>
                                <div class="col-md-6">
                                    <div class="card preview-card">
                                      <div class="card-body">
                                        <h5 class="card-title"> {company.title} </h5>
                                         <h6 class="card-subtitle mb-2 text-muted"> {company.name} </h6>
                                         <button type="button" class="btn urgent-tag"> Urgent </button>
                                         <p class="card-text">Project description. We are looking for a group of
                                                              people to help us put together a simple website for
                                                              people to email their state reps.
                                         </p>
                                        <a href="#" class="card-link float-right"
                                                    onClick={() => this.setState({selected: company.id})}>More details...</a>
                                      </div>
                                    </div>
                                </div>
                            )
                            }
                      </div>
                  </div>



              <div class="col col-md-5 overflow-auto scrolling">
                   <div class="row card-row">
                    {   this.state.selected !== -1 &&
                        <div class="card description-card d-none d-md-block">
                          <div class="card-body">
                            <button type="button" class="btn urgent-tag float-right"> Urgent </button>
                            <h5 class="card-title"> {companies[this.state.selected].title }</h5>
                             <h6 class="card-subtitle mb-2 text-muted">{companies[this.state.selected].name }</h6>
                             <h6 class="card-text pt-3"> About {companies[this.state.selected].name} </h6>
                             <p class="card-text">This is a more detailed example about what a card could say.
                                                  It would have information here about what the company does
                                                  and how people can get involved.
                             </p>

                             <h6 class="card-text pt-3"> About the Project </h6>
                             <p class="card-text">This is a more detailed example about what a card could say.
                                                  It would have information here about what the company does
                                                  and how people can get involved.
                             </p>

                             <h6 class="card-text pt-3"> Project Timeline</h6>
                             <p class="card-text">Estimated 2 weeks - Need ASAP
                             </p>

                             <div class="text-center">
                                <button type="button" class="btn project-btn"> Work on this project! </button>
                             </div>
                          </div>
                        </div>
                    }
                    </div>
                </div>
              </div>
          </div>
         )}
}

export { ProjectsPage };