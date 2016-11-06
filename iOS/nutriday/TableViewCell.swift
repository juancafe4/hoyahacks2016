//
//  TableViewCell.swift
//  nutriday
//
//  Created by Juan Carlos Ferrel on 11/6/16.
//  Copyright © 2016 Juan Carlos Ferrel. All rights reserved.
//

import UIKit

class TableViewCell: UITableViewCell {

    @IBOutlet weak var dateLabel: UILabel!
    override func awakeFromNib() {
        @IBOutlet weak var container: UIView!
        super.awakeFromNib()

        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
}
