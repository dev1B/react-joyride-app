import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";



const BoxWithButtons = ({ todos }) => (
    <div>
        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni rem, tempora. Aspernatur ducimus excepturi iste laboriosam minus molestias optio ullam voluptates. Dicta dolorem eum iure mollitia pariatur provident rerum sequi?</span><span>Adipisci esse illum libero optio voluptatem. Ad cumque earum expedita nihil nobis quia rem sint vel vitae! Aliquid autem harum, laborum laudantium minima nobis quasi quod reprehenderit sapiente sunt unde.</span><span>Accusantium adipisci at autem blanditiis delectus deserunt distinctio dolores, dolorum excepturi hic illo in iure labore laudantium nam natus nostrum numquam officia possimus quis quos, sed sit, tenetur vel velit.</span><span>Alias assumenda doloribus eligendi et harum hic magni nam necessitatibus possimus provident, quibusdam rerum, similique sint. Enim incidunt ipsum minima quia! Ad aspernatur, ducimus ea eligendi enim omnis pariatur velit.</span><span>A, ad amet asperiores cupiditate, distinctio doloribus ducimus earum eligendi facere fugit incidunt iste magnam magni minima molestias natus neque non possimus quaerat quidem repellat unde velit veniam! Animi, optio.</span><span>Assumenda dicta expedita inventore minus molestiae quisquam repellendus voluptatum! Cum dolorum eos exercitationem, hic natus nisi officia quaerat voluptas voluptates voluptatum. Accusamus corporis culpa dolores modi perspiciatis ratione ullam voluptatum?</span><span>Alias aliquid dolor excepturi fugit odit possimus tenetur voluptatibus. Beatae cum error eum hic itaque laboriosam omnis qui similique tempora veritatis! Cupiditate dicta excepturi labore magnam minus quam repellendus sit!</span><span>Adipisci commodi earum error, et, excepturi expedita explicabo in inventore, laudantium libero maiores minima omnis optio porro repellat rerum sunt. Alias libero natus necessitatibus nulla quaerat quas quisquam repudiandae? Delectus?</span><span>Accusantium alias, consequatur, cupiditate eius, exercitationem fugit ipsam laudantium mollitia porro provident qui reprehenderit similique veniam voluptate voluptatibus. Cumque dignissimos dolore dolores id labore minima neque obcaecati perspiciatis quia quo.</span><span>Asperiores consequuntur cum eius ex laudantium natus nostrum odio pariatur perspiciatis, sapiente tempora tempore voluptates? Ad commodi, cumque eos sed similique suscipit. Beatae commodi earum explicabo fugit, perferendis quisquam quod.</span></p>
        <Button outline>Details</Button>
        <Button outline>Edit</Button>
        <Button outline>Delete</Button>
    </div>

);


export default connect(null)(BoxWithButtons);
